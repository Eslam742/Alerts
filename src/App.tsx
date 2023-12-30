import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

import Alert from './components/Alert'

function App() {


  return (
    <div>
                  <Alert type={"alert-danger"} icon={<Ban size={20} />} title={"Something went wrong"}
                          desc="
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse  deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi.
                          "

                  ><p> Lorem ipsum dolor <a href="#">sit amet</a>  consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse  deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi. consectetur adipisicing elit</p>
                  </Alert>

      <Alert type={"alert-default"} icon={<Bell size={20} />} title={"Upgrade your plan"} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi." />

      <Alert type={"alert-success"} icon={<CheckCheck size={20} />} title={"Your order has been processed"} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi." />

      <Alert type={"alert-info"} icon={<Info size={20} />} title={"Note"} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi." />


      <Alert type={"alert-warning"} icon={<AlertTriangle size={20} />} title={"Tips & Tricks"} desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum debitis? Eos
      quibusdam ut maiores voluptatibus veritatis esse deserunt, perspiciatis in,
              rerum expedita molestias modi consequuntur, sapiente adipisci iure quasi." />


    </div>
  )
}

export default App
