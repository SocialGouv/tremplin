import { IconPack, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faCircle, faEnvelope, faIgloo, faLink, faLocationArrow, faMapMarkerAlt, faPhone, faStar, faUser, faFileAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export type AppIconName = 'share-alt'| 'file-alt' | 'check-circle' | 'map-marker-alt' | 'star' | 'user' | 'phone' | 'envelope'| 'link' | 'check-circle' | 'circle' ;
export type AppIconPrefix = 'far' | 'fas';
export type AppIconSize = '2x' | '3x' |'4x' |'5x' |'6x' |'7x' |'8x' |'9x' |  'lg';


interface IconProps {
  iconName: AppIconName;
  iconPrefix: AppIconPrefix;

  color?: string;
  size?: AppIconSize;

}


export const initIconLibrary = () => {
  const farPack: IconPack = far;
  library.add(farPack);
  library.add(faCheckCircle);
  library.add(faIgloo);
  library.add(faMapMarkerAlt);
  library.add(faPhone);
  library.add(faUser);
  library.add(faStar);
  library.add(faEnvelope);
  library.add(faLink);
  library.add(faCheckCircle);
  library.add(faLocationArrow);
  library.add(faCircle);
  library.add(faFileAlt);
  library.add(faShareAlt);
}

export class Icon extends Component<IconProps> {

  public render() {
    return <FontAwesomeIcon size={this.props.size} color={this.props.color} icon={[this.props.iconPrefix, this.props.iconName]} />
  }
}

