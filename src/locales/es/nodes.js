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
  NOSCHEDULE_OPTION: 'Sin horario',
  PREFER_NOSCHEDULE_OPTION: 'PreferNoSchedule',
  NOEXECUTE_OPTION: 'No Ejecutar',
  TAINTS_MSG: 'Si se agrega una mancha con &quot;clave = valor&quot; al nodo, significa que no se programará ningún pod en este nodo (política PodToleratesNodeTaints) o al menos se evita la programación tanto como sea posible (política TaintTolerationPriority), a menos que el pod tenga una coincidencia tolerancia con &quot;clave = valor&quot;.',
  TAINTS_TIPS: 'Si hay al menos una contaminación no ignorada con efecto NoSchedule, entonces el sistema no programará pods en ese nodo. <br /> Si no hay una contaminación no ignorada con efecto NoSchedule pero hay al menos una contaminación no ignorada con efecto PreferNoSchedule, entonces el sistema intentará no programar pods en el nodo. <br /> si hay al menos una contaminación no ignorada con efecto NoExecute, los pods serán expulsados del nodo (si ya se está ejecutando en el nodo) y no se programarán en el nodo (si aún no se está ejecutando en el nodo).',
  NO_TAINTS_TIPS: 'Aún no se han establecido manchas.',
  TAINT_SELECT_TIPS: 'Unirse a las manchas comunes',
  TAINT_DELETE_TIPS: 'Eliminar mancha',
  NODE_STATUS_UNSCHEDULABLE: 'No programable',
  NODE_STATUS_RUNNING: 'Corriendo',
  NODE_STATUS_WARNING: 'Advertencia',
  CLUSTER_NODE_DESC: 'Este módulo gestiona los nodos del clúster y muestra el estado de ejecución de ellos. Puede editar o eliminar nodos aquí.',
  CLUSTER_NODE_CREATE_DESC: 'Este módulo gestiona los nodos del clúster y muestra el estado de ejecución de ellos. Puede editar o eliminar nodos aquí.',
  NODE_NETWORKUNAVAILABLE: 'Red no disponible',
  NODE_NETWORKUNAVAILABLE_DESC: 'Compruebe si la configuración de red en el nodo está disponible',
  NODE_OUTOFDISK: 'OutOfDisk',
  NODE_OUTOFDISK_DESC: 'Compruebe si hay espacio en el nodo para agregar un nuevo pod',
  NODE_MEMORYPRESSURE: 'Presión de memoria',
  NODE_MEMORYPRESSURE_DESC: 'Si la presión de uso de memoria en el nodo es demasiado alta, la programación falla',
  NODE_DISKPRESSURE: 'DiskPressure',
  NODE_DISKPRESSURE_DESC: 'Si existe presión sobre el tamaño del disco, es decir, si la capacidad del disco es baja',
  NODE_PIDPRESSURE: 'Presión PID',
  NODE_PIDPRESSURE_DESC: 'Si existe presión sobre los procesos, es decir, si hay demasiados procesos en el nodo',
  NODE_READY: 'Listo',
  NODE_READY_DESC: 'Si el nodo está sano y listo para aceptar pods',
  NODE_NETWORKUNAVAILABLE_TIP: 'Si la red para el nodo está configurada correctamente.',
  NODE_OUTOFDISK_TIP: 'Si no hay suficiente espacio libre en el nodo para agregar nuevos pods.',
  NODE_MEMORYPRESSURE_TIP: 'Si existe presión en la memoria del nodo, es decir, si la memoria del nodo es baja.',
  NODE_DISKPRESSURE_TIP: 'Si existe presión sobre el tamaño del disco, es decir, si la capacidad del disco es baja.',
  NODE_PIDPRESSURE_TIP: 'Si existe presión sobre los procesos, es decir, si hay demasiados procesos en el nodo.',
  NODE_READY_TIP: 'Si el nodo está sano y listo para aceptar vainas.',
  NODE_TYPES_Q: '¿Cuáles son los tipos de nodos de clúster?',
  NODE_TYPES_A: 'Los nodos se dividen en nodos maestros y nodos de trabajo.',
  WHAT_IS_NODE_TAINTS_Q: '¿Qué son las manchas de nodos?',
  WHAT_IS_NODE_TAINTS_A: 'Las manchas permiten que un nodo repele un conjunto de pods. Las contaminaciones y las tolerancias funcionan juntas para garantizar que los pods no se programen en nodos inapropiados.',
  NODE_TYPE_DESC: 'Los tipos de nodos ayudan a los usuarios a dividir los nodos en diferentes grupos. Los usuarios pueden agregar el nodo de alojamiento a un grupo correspondiente creando nodos de diferentes tipos que estén conectados adecuadamente entre sí. De esta forma, los Pods pueden desplegarse en los nodos físicos apropiados según el grupo. La disponibilidad de recursos y la continuidad del negocio también se pueden mejorar.',
  NODE_TYPE_DESCRIPTION_DEC: 'La descripción ayudará a los usuarios a seleccionar tipos de nodos y usar el clúster.',

}