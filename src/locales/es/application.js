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
  TOTAL_APPS: 'Total de {num} aplicaciones',
  APPLICATIONS_DESC: 'Una aplicación proporciona a los usuarios funciones comerciales integrales en un solo paquete. Las plantillas de aplicación en KubeSphere se basan en la especificación de empaquetado de Helm. Se entregan a través de un repositorio Helm público o privado unificado. Una aplicación está compuesta por uno o más objetos de Kubernetes, que incluyen cargas de trabajo, servicios e ingreso.',
  APP_DEPLOYMENT_DESC: 'La tecnología de empaquetado de software liviano, portátil y autónomo permite que las aplicaciones se ejecuten en casi cualquier lugar de la misma manera.',
  LB_ALG_DESC: 'Admite algoritmos de equilibrio de carga estándar </br> ROUND_ROBIN ： Sondeo, el algoritmo de equilibrio de carga predeterminado. </br> LEAST_CONN: seleccione aleatoriamente dos hosts sanos y luego seleccione un host con menos enlaces de los dos hosts seleccionados. </br> ALEATORIO: Elija uno al azar de todos los hosts sanos.',
  LB_ROUND_ROBIN: 'ROUND_ROBIN',
  LB_LEAST_CONN: 'LEAST_CONN',
  LB_RANDOM: 'ALEATORIO',
  CLUSTER_NAME_DESC: 'Solo puede contener letras minúsculas, números y guiones (&quot;-&quot;), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 14.',
  CLUSTER_ALIAS_DESC: 'El alias puede estar compuesto de cualquier carácter para ayudarlo a distinguir mejor los recursos y admitir nombres chinos.',
  COMPONENT_VERSION_DESC: 'Para la aplicación de la gobernanza para distinguir entre componentes. Solo puede contener letras minúsculas y números. La longitud máxima de caracteres se establece en 16.',
  APP_WORKLOAD_TYPE_DESC: 'Admite servicios sin estado (implementación) y servicios con estado (StatefulSet)',
  SERVICE_DEPLOYMENT: 'Servicio sin estado (implementación)',
  SERVICE_STATEFULSET: 'Servicio con estado (StatefulSet)',
  CONNECTION_POOL_TIP: 'Cree un número fijo de objetos de conexión para la aplicación, guárdelos en el grupo para su reutilización. El grupo existente está disponible para cada acceso y se devuelve al grupo después de su uso.',
  APP_GOVERNANCE_DESC: 'Si Application Governance está habilitado, el contenedor Istio-proxy se inyectará como SideCar en cada componente. <a href="https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/" target="_blank">LEE MAS</a>',
  POD_ISOLATION_RATIO_DESC: '% Máximo de Pod para el servicio ascendente que se puede expulsar. Utiliza redondeo ascendente, cuando se establece en 13%, aislará hasta 2 instancias si existen 10 instancias.',
  BASE_EJECTION_TIME_DESC: 'Duración mínima de expulsión. Un host permanecerá expulsado durante un período igual al producto de duración mínima de expulsión y la cantidad de veces que se expulsó el host.',
  CIRCUIT_DESC: 'El corte de circuito es un mecanismo de protección de conexión de microservicio que aborda el efecto de avalancha. Cuando un microservicio de la conexión de abanico no está disponible o el tiempo de respuesta es demasiado largo, el servicio se degradará y la llamada al microservicio del nodo se interrumpirá y la respuesta de error se devolverá rápidamente. Después de detectar que la respuesta del microservicio es normal, se reanudará la conexión.',
  'Last {num} records': 'Últimos {num} registros',
  'Last {hour} hour': 'Última {hora} hora',
  'Last {hour} hours': 'Últimas {hora} horas',
  'Last {day} days': 'Últimos {días} días',
  WORKLOAD_NAME_EXIST: 'La carga de trabajo {nombre} existe',
  APPLICATION_TYPE_DESC: 'KubeSphere admite implementaciones de aplicaciones (basadas en Helm) desde App Store, así como Application CRD.',
  HOW_TO_USE_APPLICATION_GOVE_Q: '¿Cómo usar el gobierno de aplicaciones?',
  HOW_TO_USE_APPLICATION_GOVE_A: 'Cree una aplicación de composición y habilite la gestión de servicios para cada servicio antes de utilizar la Gestión de aplicaciones.',
  FROM_APP_STORE_DESC: 'Desde la App Store oficial de KubeSphere con aplicaciones de alta calidad y despliegues fáciles.',
  FROM_APP_TEMPLATES_DESC: 'Desde las plantillas de aplicación del espacio de trabajo y las plantillas de aplicaciones Helm de terceros del Repositorio de aplicaciones.',
  COMPOSING_APP_DESC: 'Puede publicar servicios para crear aplicaciones a través de la orquestación de recursos (compatible con Application Governance).',
  APP_TEMPLATES_MODAL_DESC: 'La plantilla de la aplicación proviene del espacio de trabajo y las plantillas de la aplicación Helm de terceros. Admite la implementación con un clic y se puede visualizar en KubeSphere para mostrar y proporcionar implementaciones y funciones de administración.',
  TIP_APP_TYPE: 'KubeSphere admite el despliegue de aplicaciones (basado en Helm) desde tiendas de aplicaciones y repositorios de aplicaciones, así como aplicaciones caseras (Application CRD).',
  TIP_APP_GOVERNANCE: 'Usar App Governance requiere crear una aplicación homebrew y activar la gobernanza de servicio para cada servicio',
  APP_REPOS_DESC: 'El repositorio de aplicaciones proviene de un repositorio Helm Chart Repo de terceros, que muestra visualmente y proporciona capacidades de implementación y administración en KubeSphere. Los usuarios pueden implementar rápidamente aplicaciones con un solo clic según las plantillas en el repositorio de aplicaciones.',
  SEARCH_TIPS: 'Puede filtrar según las condiciones relevantes',
  APPLICATION_BASEINFO_DESC: 'Información básica de la aplicación (como la descripción del nombre)',
  TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP: 'La gobernanza del tráfico depende del módulo de microservicio, el clúster actual no habilita el módulo de microservicio',
  TRACING_NO_MICROSERVICE_TIP: 'El seguimiento depende del módulo de microservicio, el clúster actual no habilita el módulo de microservicio',
  APPLICATION_SERVICE_DESC: 'Puede configurar diferentes componentes de servicio según el tipo de servicio en una aplicación. Los servicios con estado y sin estado son compatibles.',

}