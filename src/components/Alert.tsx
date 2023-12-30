
import { X } from 'lucide-react';
import "./index.scss"
import { ReactNode } from 'react';
import { AlertTypes } from '../types';

interface IProps{
    type: AlertTypes,
    icon: ReactNode,
    title: string,
    desc?: string,
    children?:ReactNode,
}

const Alert = ({type,icon,title,desc,children}:IProps) => {
  return (
      <div className={type}>
          <div className="alert-header">
              <div className="title">
                  <span> {icon}</span>
                  <h4 >{title}</h4>
              </div>

              <X className="close"/>
          </div>


          {children ? children : <p>{desc}</p>}

    </div>
  )
}

export default Alert