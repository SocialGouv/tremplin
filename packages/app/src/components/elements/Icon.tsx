import { IconPack, library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faIgloo, faMailBulk, faMapMarkerAlt, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

interface IconProps {
  iconName: 'check-circle' | 'map-marker-alt' | 'star' | 'user' | 'phone' | 'mailbox';
  iconPrefix: 'far' | 'fas';

  color?: string;
  size?: SizeProp;

}


export const initIconLibrary = () => {
  const farPack: IconPack = far;
  library.add(farPack);
  library.add(faCheckCircle);
  library.add(faIgloo);
  library.add(faMailBulk);
  library.add(faMapMarkerAlt);
  library.add(faPhone);
  library.add(faUser);
  library.add(faStar);

}

export class Icon extends Component<IconProps> {

  public render() {
    return <FontAwesomeIcon size={this.props.size} color={this.props.color} icon={[this.props.iconPrefix, this.props.iconName]} />
  }
}

