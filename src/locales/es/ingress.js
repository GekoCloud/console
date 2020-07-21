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
  'Add Annotation': 'Añadir anotación',
  'Add Path': 'Agregar ruta',
  'Auto Generate': 'Autogenerar',
  'Click to visit': 'Haga clic para visitar',
  'Create Route': 'Crear ruta',
  'Edit Annotations': 'Editar anotaciones',
  'Edit Rules': 'Editar reglas',
  'Gateway Address': 'Dirección de la entrada',
  'Gateway IP': 'IP de acceso',
  'Gateway Type': 'Tipo de puerta de enlace',
  HostName: 'HostName',
  'Invalid host': 'Host inválido',
  'Invalid paths': 'Rutas inválidas',
  Mode: 'Modo',
  Paths: 'Rutas',
  'Please add at least one routing rule.':
    'Agregue al menos una regla de enrutamiento.',
  'Please input Hostname': 'Por favor introduce el nombre de host',
  'Please select a service': 'Por favor selecciona un servicio',
  Route: 'Ruta',
  'Route Rules': 'Reglas de ruta',
  Rules: 'Reglas',
  'Set Route Rule': 'Establecer regla de ruta',
  'Specify Domain': 'Especificar dominio',
  'Unable to access': 'No puedo acceder',
  ROUTE_DESC:
    'Una ruta proporciona una forma de agregar servicios, y puede exponer los servicios internos del clúster al exterior a través de una dirección IP accesible desde el exterior.',
  ROUTE_CREATE_DESC:
    'Una ruta proporciona una forma de agregar servicios, y puede exponer los servicios internos del clúster al exterior a través de una dirección IP accesible desde el exterior.',
  ROUTE_ANNOTATION_DESC:
    'Puede establecer el comportamiento de la ruta agregando anotaciones a la ruta. Consulte <a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/" target="_blank">Anotaciones</a> para obtener una lista detallada de las anotaciones disponibles.',
  RULE_SETTING_MODE_AUTO:
    'Al configurar el acceso DNS y cambiar el nombre de dominio a {$ hostname} + {$ gateway address} + nip.io, puede acceder al servicio a través de {$ hostname}. {$ Gateway address} .nip.io: {$ NodePort} . <br/> Asegúrese de estar en un entorno de red habilitante para acceder a la dirección de la puerta de enlace.',
  RULE_SETTING_MODE_SPECIFY:
    'Asegúrese de que el nombre de dominio que establezca pueda resolverse en la dirección IP del portal de acceso. <br/> Si se encuentra en un entorno de nube privada, modifique el archivo de host local y luego acceda a él a través de {$ nombre de dominio}: {$ nodo puerto}.',
  GATEWAY_SERVICE_MESH_STATUS_ON: 'En',
  GATEWAY_SERVICE_MESH_STATUS_OFF: 'Apagado',
  INGRESS_CONTROLLER_NODEPORT_DESC:
    'Si la puerta de enlace está habilitada, el sistema asignará automáticamente números de puerto de http y https. Las rutas de aplicación pueden acceder a los servicios a través del proxy inverso.',
  INGRESS_CONTROLLER_LOADBALANCER_DESC:
    'Para usar QingCloud LoadBalancer como una puerta de enlace de servicio, primero implemente el complemento QingCloud Cloud Controller Manager.',
  NO_INTERNET_ACCESS_TIP:
    'La dirección de la puerta de enlace no se encuentra en el proyecto actual, por lo que no puede establecer la ruta de la aplicación. Póngase en contacto con el administrador de su proyecto para activarlo en <strong>Acceso a Internet</strong> .',
  UNABLE_CREATE_ROUTE_TIP:
    'La dirección de puerta de enlace disponible no se encuentra en el proyecto actual, por lo que no se puede crear la ruta de la aplicación.',
  GATEWAY_APPLICATION_GOVERNANCE_TIP:
    'No necesita habilitar Application Governance si no utiliza la función de seguimiento. Una vez que Application Governance esté habilitado, verifique si se agrega una anotación como &quot;nginx.ingress.kubernetes.io/service-upstream: true&quot; para la ruta de la aplicación cuando la ruta es inaccesible. Si no, agregue uno.',
  UNABLE_TO_ACCESS_TIP:
    '● Asegúrese de que el nombre de dominio que establezca pueda resolverse en la dirección IP del portal de acceso. <br/> ● Si se encuentra en un entorno de nube privada, modifique el archivo de host local y luego acceda a él a través de {$ nombre de dominio}: {$ nodo puerto}. <br/> ● Al configurar el acceso DNS, modifique el nombre de dominio a {$ hostname} + {$ gateway address} + nip.io, y luego acceda al servicio a través de {$ hostname}. {$ Gateway address} .nip.io: {$ NodePort }. <br/> ● Si el acceso está bloqueado cuando se usa el nombre de dominio, confirme si su nombre de dominio existe y se ha registrado.',
  PREREQUESTS_FOR_USE_ROUTE_Q: '¿Requisitos previos para usar rutas?',
  PREREQUESTS_FOR_USE_ROUTE_A:
    'Para usar la ruta, el administrador debe configurar el acceso a Internet para el proyecto actual.',
  ACCESS_TYPES_OF_ROUTE_Q: '¿Tipos de acceso que admite la ruta?',
  ACCESS_TYPES_OF_ROUTE_A:
    'Las rutas de KubeSphere admiten nombres de dominio personalizados (HostName) y el método de acceso DNS comodín.',
}
