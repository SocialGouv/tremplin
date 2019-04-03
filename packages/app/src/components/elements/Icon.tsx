import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faIgloo, faMapMarkerAlt, faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

interface IconProps {
  checkCircle?: boolean;
  mapMarker?: boolean;
  star?: boolean;
  user?: boolean;
  call?: boolean;
  email?: boolean;

  color?: string;
  size?: SizeProp;
}

export class Icon extends Component<IconProps> {

  public render() {
    return <FontAwesomeIcon size={this.props.size} color={this.props.color} icon={this.getIcon(this.props)} />
  }

  private getIcon(props: IconProps): any {
    let icon: any = faIgloo;
    if (props.checkCircle) {
      icon = faCheckCircle;
    } else if (props.mapMarker) {
      icon = faMapMarkerAlt;
    } else if (props.star) {
      icon = faStar;
    } else if (props.user) {
      icon = faUser;
    } else if (props.call) {
      icon = faPhone;
    } else if (props.email) {
      icon = faMailBulk;
    }
    return icon;
  }
}

