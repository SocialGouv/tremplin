from subprocess import check_output
import hashlib

def get_active_branches():
  active_branche_list = []
  raw_active_branche = check_output('git branch', shell=True)
  for  active_branch in raw_active_branche.decode('utf-8').split('\n'):
    if active_branch and not active_branch.startswith('*') and active_branch.strip() != 'master':
      active_branch = active_branch +'\n'
      active_hash_branch = hashlib.sha1(active_branch.strip().encode())
      active_branche_list.append(active_hash_branch.hexdigest()[:5])
  return active_branche_list

def get_active_k8s_tags():
  active_k8s_tag_list = []
  raw_k8s_tag_list = check_output("kubectl get pods -o go-template --template '{{range .items}}{{.metadata.labels.branch}}{{end}}'", shell=True)
  for active_k8s_tag in raw_k8s_tag_list.decode('utf-8').replace('<no value>','').split('tremplin-'):
    active_k8s_tag_list.append(active_k8s_tag)
  return active_k8s_tag_list

def delete_k8s_object(label):
  k8s_object_list = ["service", "ingress", "configmap", "deployments", "statefulset"]
  for k8s_object in k8s_object_list:
    command_to_delete_k8s_object = ('kubectl delete '+ k8s_object +' --selector branch=tremplin-'+label)
    check_output(command_to_delete_k8s_object, shell=True)

def get_k8s_tag_to_delete(active_k8s_tag_list, active_branch_list):
  k8s_tag_list_to_delete = []
  if active_k8s_tag_list is not None:
    for active_k8s_tag in active_k8s_tag_list:
      delete_tag = False
      if active_k8s_tag != '':
        for active_branch in active_branch_list:
          if active_k8s_tag == active_branch :
            delete_tag = False
            break
          else:
            delete_tag = True
        if(delete_tag):
          k8s_tag_list_to_delete.append(active_k8s_tag)
  print(k8s_tag_list_to_delete)
  return k8s_tag_list_to_delete

if __name__ == '__main__':
  for k8s_tag_to_delete in get_k8s_tag_to_delete(get_active_k8s_tags(), get_active_branches()):
    delete_k8s_object(k8s_tag_to_delete)
    print('k8s objects with label branch=tremplin-'+k8s_tag_to_delete+' have been deleted')
