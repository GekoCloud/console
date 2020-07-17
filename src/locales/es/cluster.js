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
  'Add Cluster': 'Add Cluster',
  'Add New Cluster': 'Add New Cluster',
  'All Projects': 'All Projects',
  'Authorize the cluster to workspace': 'Authorize the cluster to workspace',
  Authorized: 'Authorized',
  'Available Clusters': 'Available Clusters',
  'Choose a provider': 'Choose a provider',
  'Click to Copy': 'Click to Copy',
  'Cluster Info': 'Cluster Info',
  'Cluster initialization failed': 'Cluster initialization failed',
  'Cluster List': 'Cluster List',
  'Cluster Management': 'Cluster Management',
  'Cluster Member': 'Cluster Member',
  'Cluster Members': 'Cluster Members',
  'Cluster Name': 'Cluster Name',
  'Cluster Roles': 'Cluster Roles',
  'Cluster Settings': 'Cluster Settings',
  'Cluster Visibility': 'Cluster Visibility',
  'Connection Method': 'Connection Method',
  'Copy successfully': 'Copy successfully',
  'Custom Resources': 'Custom Resources',
  'Edit cluster basic information': 'Edit cluster basic information',
  'Edit Cluster Info': 'Edit Cluster Info',
  'Edit Visibility': 'Edit Visibility',
  'Enter the project': 'Enter the project',
  'Go back': 'Go back',
  'Host Cluster': 'Host Cluster',
  'Host Clusters': 'Host Clusters',
  Import: 'Import',
  'Import Kubernetes Cluster': 'Import Kubernetes Cluster',
  'Invite members to the cluster': 'Invite members to the cluster',
  'IP Ranges': 'IP Ranges',
  'Kubernetes Settings': 'Kubernetes Settings',
  'Kubernetes Status': 'Kubernetes Status',
  'Kubernetes Version': 'Kubernetes Version',
  'Member Cluster': 'Member Cluster',
  'Member Clusters': 'Member Clusters',
  'Network Management': 'Network Management',
  'Network Policies': 'Network Policies',
  'Network Topology': 'Network Topology',
  'Node Types': 'Node Types',
  'Nodes Management': 'Nodes Management',
  'Not Ready': 'Not Ready',
  'Please input cluster name': 'Please input cluster name',
  'Please input the kubesphere api server address of the cluster':
    'Please input the kubesphere api server address of the cluster',
  'Please select or input a provider': 'Please select or input a provider',
  'Please select or input a tag': 'Please select or input a tag',
  'Scheduler Scheduling Times': 'Scheduler Scheduling Times',
  'Scheduling Failed Pods': 'Scheduling Failed Pods',
  'Select Clusters': 'Select Clusters',
  'Set as public cluster': 'Set as public cluster',
  Snapshots: 'Snapshots',
  'Storage Management': 'Storage Management',
  'System Projects': 'System Projects',
  'The current cluster is public': 'The current cluster is public',
  Tools: 'Tools',
  Unauthorized: 'Unauthorized',
  Unbind: 'Unbind',
  'Unbind Cluster': 'Unbind Cluster',
  'User Projects': 'User Projects',
  Validating: 'Validating',
  'Validation failed': 'Validation failed',
  'Waiting for the cluster to join': 'Waiting for the cluster to join',

  NO_CLUSTER_TIP: 'Agregue al menos un clúster.',
  NO_CLUSTER_TIP_DESC:
    'Un clúster es un grupo de nodos (máquinas físicas o virtuales) que ejecutan Kubernetes, y la función de Kubesphere también depende de los nodos en el clúster.',
  ADD_NEW_CLUSTER_DESC: 'Agregar un nuevo clúster de Kubernetes',
  CHOOSE_PROVIDER_DESC:
    'KubeSphere proporciona una solución para implementar rápidamente los clústeres de Kubernetes entre los principales proveedores de servicios.',
  VISIBILITY_PART: 'Parcialmente visible',
  VISIBILITY_PUBLIC: 'Público',
  MULTI_CLUSTER: 'Multi-Clusters',
  IMPORT_CLUSTER_DESC: 'Importar un clúster de Kubernetes existente',
  SELECT_CLUSTERS_DESC:
    'Seleccione el clúster disponible en el espacio de trabajo.',
  CLUSTER_SETTINGS_DESC: 'Definir información de configuración del clúster',
  CLUSTER_TAG: 'Etiqueta',
  CLUSTER_TAG_DESC:
    'Para indicar para qué se utiliza el clúster, como un entorno de producción, un entorno de prueba o un entorno de demostración',
  CLUSTER_PROVIDER_DESC: 'El proveedor de infraestructura de clúster',
  CLUSTER_CONNECT_METHOD_DESC:
    'Conéctese directamente al clúster o use un agente',
  CONNTECT_DIRECT: 'Conexión directa al clúster de Kubernetes',
  CONNTECT_PROXY: 'Agente de conexión de clúster',
  CLUSTER_WAITING_JOIN_DESC:
    'Actualmente no hay nodos disponibles. El clúster no se puede usar. Puede agregar el siguiente archivo de configuración para habilitar el clúster.',
  CLUSTER_AGENT_TIP_1:
    'Cree un archivo llamado agent.yaml en el clúster de destino a través de SSH',
  CLUSTER_AGENT_TIP_1_DESC:
    'Por ejemplo, <span class="code">agent.yaml</span> .',
  CLUSTER_AGENT_TIP_2:
    'Copie el siguiente archivo de configuración en agent.yaml',
  CLUSTER_AGENT_TIP_2_DESC:
    'El archivo del agente puede conectar el clúster de destino a la plataforma.',
  CLUSTER_AGENT_TIP_3:
    'Ejecutar en la línea de comando <span class="code">kubectl create -f agent.yaml</span>',
  CLUSTER_AGENT_TIP_3_DESC:
    'Después de ejecutar el comando, espere la actualización del estado del clúster.',
  CLUSTER_CONDITIONS: 'Condiciones de clúster',
  CLUSTER_BASE_INFO_DESC:
    'Este módulo resume la información básica del clúster actual.',
  INVITE_CLUSTER_MEMBER_DESC: 'Puede invitar a nuevos miembros a este clúster.',
  CLUSTER_API_SERVER_TITLE: 'Servidor API Kubesphere para agregar al clúster',
  CLUSTER_API_SERVER_DESC:
    'Debe ingresar la dirección del servidor API de KubeSphere para agregarla al clúster',
  INPUT_KUBECONFIG: 'Complete el KubeConfig del clúster de destino',
  CLUSTER_DIRECT_IMPORT_TIP:
    'La interfaz de control de múltiples clústeres de KubeSphere se conecta a los clústeres importados a través del kubeconfig proporcionado. Para este método, el clúster actual debe poder acceder directamente a los clústeres que se importarán a través de la dirección del servidor en kubeconfig. </br></br> Este método generalmente se aplica a las siguientes condiciones: </br> 1. El clúster actual y los clústeres que se importarán están en la misma red interna. </br> 2. La red tanto del clúster actual como de los clústeres que se importarán está conectada a través de VPN u otras tecnologías (por ejemplo, Túneles). </br> 3. Se puede acceder a la dirección del servidor en kubeconfig a través de la red pública.',
  CLUSTER_AGENT_IMPORT_TIP:
    'La interfaz de control de KubeSphere se conecta a los clústeres que se importarán a través de un proxy. La interfaz de control ejecuta un servicio de proxy público, que está conectado a un componente de cliente creado por clústeres para importar. Por lo tanto, se crea un proxy de reserva. Para este método, la interfaz de control y los clústeres que se van a importar no necesitan estar en la misma red. La dirección de apiserver de los clústeres a importar tampoco necesita exponerse. Sin embargo, el rendimiento de la red puede verse afectado. </br></br> Este método generalmente se aplica a las siguientes condiciones: </br> 1. El clúster actual y los clústeres que se importarán no están en la misma red. <br/> 2. La red tanto del clúster actual como de los clústeres que se van a importar no se puede conectar a través de VPN u otras tecnologías (por ejemplo, Túneles). <br/> 3. Se pueden aceptar deficiencias de rendimiento de la red dentro de los clústeres.',
  CLUSTER_AGENT_TITLE:
    'Agregue el clúster en función del agente proporcionado en el clúster.',
  CLUSTER_AGENT_DESC:
    'Se debe establecer un agente correspondiente en el clúster.',
  HOW_TO_GET_KUBECONFIG: '¿Cómo obtener KubeConfig?',
  UNBIND_CLUSTER_DESC:
    'Una vez que el clúster no está vinculado, KubeSphere no podrá administrar el clúster y los recursos de Kubernetes dentro del clúster no se eliminarán.',
  SURE_TO_UNBIND_CLUSTER: 'Confirmo que quiero desvincular el clúster.',
  AUTHORIZE_CLUSTER_TO_WORKSPACE_DESC:
    'Los clústeres se pueden asignar a espacios de trabajo mediante autorización.',
  PUBLIC_CLUSTER_DESC:
    'Un clúster público significa que todos los usuarios de la plataforma pueden acceder al clúster, en el que pueden crear y programar recursos.',
  CLUSTER_AUTHORIZATION_DESC:
    'Los clústeres se pueden asignar a espacios de trabajo mediante autorización.',
  CLUSTER_VISIBILITY_Q1:
    '¿Cómo autorizar clústeres a espacios de trabajo específicos?',
  CLUSTER_VISIBILITY_A1:
    'Puede autorizar el clúster a diferentes espacios de trabajo haciendo clic en Editar visibilidad.',
  CLUSTER_VISIBILITY_Q2: '¿Qué es un clúster público?',
  CLUSTER_VISIBILITY_A2:
    'Un clúster público significa que todos los usuarios de la plataforma pueden acceder al clúster, en el que pueden crear y programar recursos.',
}
