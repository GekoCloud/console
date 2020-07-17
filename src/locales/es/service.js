/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
  ' has no corresponding workload.': ' has no corresponding workload.',
  'Access Method': 'Access Method',
  'Access Type': 'Access Type',
  'Add Route Rule': 'Add Route Rule',
  'Add Selector': 'Add Selector',
  'Associated Application': 'Associated Application',
  'Automatically assign Service IP': 'Automatically assign Service IP',
  'Commonly included tags in the current workloads':
    'Commonly included tags in the current workloads',
  'Container Port': 'Container Port',
  'Create Service': 'Create Service',
  'Create service by specifying workloads':
    'Create service by specifying workloads',
  'Create service by Yaml': 'Create service by Yaml',
  Creating: 'Creating',
  'Creation failed, please delete and try again':
    'Creation failed, please delete and try again',
  'Custom Creation': 'Custom Creation',
  'Delete Service': 'Delete Service',
  'Do not assign Service IP': 'Do not assign Service IP',
  'Edit Internet Access': 'Edit Internet Access',
  'Edit Service': 'Edit Service',
  'Enable Sticky Session': 'Enable Sticky Session',
  'External Address': 'External Address',
  'External Service': 'External Service',
  'Internal access': 'Internal access',
  'Invalid port': 'Invalid port',
  'Language Type': 'Language Type',
  'LoadBalancer IP': 'LoadBalancer IP',
  'Map Services outside the cluster': 'Map Services outside the cluster',
  'Maximum Session Sticky Time (s)': 'Maximum Session Sticky Time (s)',
  'No related resources found with current service(s)':
    'No related resources found with current service(s)',
  'Node Port': 'Node Port',
  'Node Port(s)': 'Node Port(s)',
  'Not Associate': 'Not Associate',
  'Path is Required': 'Path is Required',
  'Please input ExternalName': 'Please input ExternalName',
  'Please input ports': 'Please input ports',
  'Please input selectors that have corresponding workloads':
    'Please input selectors that have corresponding workloads',
  'Please input service name': 'Please input service name',
  'Please input valid Selector': 'Please input valid Selector',
  'Please select a workload': 'Please select a workload',
  'Please select Service': 'Please select Service',
  Ports: 'Ports',
  routes: 'routes',
  Selector: 'Selector',
  selector: 'selector',
  'Service Access': 'Service Access',
  'Service Mesh': 'Service Mesh',
  'Service Name': 'Service Name',
  'Service Port': 'Service Port',
  'Service Type': 'Service Type',
  services: 'services',
  'Simple Service': 'Simple Service',
  'Specify Workload': 'Specify Workload',
  'Specify Workloads': 'Specify Workloads',
  'Stateful Service': 'Stateful Service',
  'Stateless Service': 'Stateless Service',
  'Sure to delete the service(s)?': 'Sure to delete the service(s)?',
  'Target Port': 'Target Port',
  'The current selector': 'The current selector',
  'The maximum session sticky time is 10800s (3 hours).':
    'The maximum session sticky time is 10800s (3 hours).',
  'Virtual IP': 'Virtual IP',
  
  SERVICE_EXTERNAL_NAME_DESC: 'Asigne el servicio al contenido del campo externalName devolviendo un registro CNAME con su valor.',
  TOTAL_WORKLOAD: '{count} cargas de trabajo en total',
  SERVICE_SELECTOR_AFFECT_1: '',
  SERVICE_SELECTOR_AFFECT_2: 'afectar las cargas de trabajo de {count}',
  SERVICE_NAME_DESC: 'Solo puede contener letras minúsculas, números y guiones (&quot;-&quot;), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 63.',
  SERVICE_DESC: 'Un servicio es una abstracción que define una colección lógica de Pods y una estrategia para acceder a ellos.',
  SERVICE_CREATE_DESC: 'Un servicio es una abstracción que define una colección lógica de Pods y una estrategia para acceder a ellos. Puede seleccionar el tipo de servicio o cómo se crea un servicio. KubeSphere admite servicios con y sin estado y los servicios se pueden crear a través de códigos o artefactos.',
  SERVICES_BASEINFO_DESC: 'El nombre y la descripción del servicio deben proporcionarse para crear el servicio. El nombre del servicio no puede ser el mismo que el nombre del servicio existente en el mismo proyecto.',
  SERVICES_SETTINGS_DESC: 'La configuración del servicio define cómo acceder a una carga de trabajo existente.',
  SERVICES_INTERNET_ACCESS_DESC: 'Exponga el servicio fuera del clúster.',
  VIRTUAL_IP_TITLE: 'IP virtual: acceda al servicio a través de la IP interna del clúster',
  VIRTUAL_IP_DESC: 'Basado en la IP única generada por el clúster. La IP se puede usar para acceder al servicio dentro del clúster.',
  HEADLESS_SELECTOR_TITLE: 'Sin cabeza (selector): acceso directo al servicio a través de la IP del punto final del servicio dentro del clúster',
  HEADLESS_SELECTOR_DESC: 'El clúster no creará una IP para el servicio. En cambio, los clientes dentro del clúster acceden directamente a través de sus puntos finales. Por ejemplo, servicios que necesitan distinguir maestro de esclavo.',
  HEADLESS_EXTERNAL_NAME_TITLE: 'Sin cabeza (nombre externo): direcciones de mapas fuera del clúster para visitar',
  HEADLESS_EXTERNAL_NAME_DESC: 'Asigne servicios externos a un clúster o proyecto.',
  ACCESS_NONE_TIP: 'Hacer el servicio accesible solo internamente',
  ACCESS_NODEPORT_TIP: 'Exponga el servicio en la IP de cada nodo en un puerto estático',
  ACCESS_LOADBALANCER_TIP: 'Exponga el servicio externamente utilizando el equilibrador de carga del proveedor de la nube',
  SERVICE_NODE_PORT_DESC: 'Si su red actual está en la misma red que el nodo del clúster, puede acceder a ella a través de la dirección IP del clúster + número de puerto del nodo o a través del puerto del nodo IP + nodo.',
  SERVICE_TYPE: 'Puede crear un servicio sin estado o un servicio con estado.',
  SERVICE_TYPES_Q: 'Tipos de servicio',
  SERVICE_TYPES_A: 'El servicio se divide en un servicio sin estado (Servicio virtual + Depolyment) y un servicio con estado (Servicio sin cabeza + Statefulset). En un servicio sin estado, las réplicas pueden compartir un volumen, y un servicio con estado debe tener su propio volumen independiente.',
  SCENARIOS_FOR_SERVICES_Q: '¿Cuáles son los escenarios de aplicación para servicios sin estado y servicios con estado?',
  SCENARIOS_FOR_SERVICES_A: 'Los servicios sin estado son útiles para escenarios en los que los datos persistentes no se almacenan localmente y varias instancias responden a solicitudes uniformes (Nginx, Tomcat, etc.). Los servicios con estado son útiles cuando se trata de almacenamiento de datos, subprocesos múltiples o colas (base de datos MySQL, Kafka, Zookeeper, etc.).',
  SERVICE_SIMPLE_DESC: 'Crear un servicio a partir de un grupo de pods existente',
  DELETE_SERVICE_DESC: 'Está a punto de eliminar los servicios {recurso}. ¿Confirma si desea eliminar el recurso asociado?',
  SERVICE_FROM_CODE: 'Cree un nuevo servicio desde el repositorio de código fuente',
  SERVICE_FROM_ARTIFACTS: 'Construye un nuevo servicio a través del artefacto',
  SERVICE_FROM_CODE_DESC: 'Puede construir su código existente en una imagen e implementarlo a través de Source to Image.',
  SERVICE_FROM_ARTIFACTS_DESC: 'Puede construir un artefacto existente en una nueva imagen y completar la implementación.',
  SERVICE_CUSTOM_CREATE: 'Puede crear un servicio ya sea especificando una carga de trabajo o editando la configuración (Yaml).',
  SERVICE_TYPE_STATEFULSERVICE: 'Servicio de estado',
  SERVICE_TYPE_STATELESSSERVICE: 'Servicio sin estado',
  SERVICE_TYPE_EXTERNALSERVICE: 'Servicio externo',
  STATEFUL_SERVICE_DESC: 'Los servicios con estado se usan para administrar aplicaciones con estado, asegurando una implementación y escala ordenada y elegante. También proporcionan almacenamiento persistente estable e identificadores de red.',
  STATELESS_SERVICE_DESC: 'El servicio más utilizado en servicios de contenedores. Define la plantilla del Pod para controlar el estado del Pod, incluidas las actualizaciones continuas y los retrocesos.',
  SERVISE_SIMPLE_DESC: 'Crea un servicio con Pods existentes.',
  SERVICE_PORTS_DESC: 'Configure el puerto para exponer la imagen del contenedor y el puerto de servicio.',
  SPECIFY_WORKLOAD_DESC: 'Especifique una carga de trabajo que debe asociarse con el servicio.',
  EIP_POOL_DESC: 'Método de acceso dentro del clúster (DNS)',

}
