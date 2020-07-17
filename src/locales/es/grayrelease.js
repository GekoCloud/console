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
  '95% requests duration': '95% requests duration',
  'A/B Testing': 'A/B Testing',
  'Allocate all traffic proportionally to grayscale release components':
    'Allocate all traffic proportionally to grayscale release components',
  'Blue-green Deployment': 'Blue-green Deployment',
  'Canary Release': 'Canary Release',
  'Cookie Content': 'Cookie Content',
  'Create Grayscale Release Job': 'Create Grayscale Release Job',
  'Create Job': 'Create Job',
  'Custom Header': 'Custom Header',
  'Deploy sample application': 'Deploy sample application',
  'Deploy Sample Application': 'Deploy Sample Application',
  'Edit Grayscale Release Job': 'Edit Grayscale Release Job',
  'Exact Match': 'Exact Match',
  'Forward by request content': 'Forward by request content',
  'Forward by traffic ratio': 'Forward by traffic ratio',
  'Grayscale Release': 'Grayscale Release',
  'Grayscale Release Component': 'Grayscale Release Component',
  'Grayscale Release Components': 'Grayscale Release Components',
  'Grayscale Release Strategy': 'Grayscale Release Strategy',
  'Grayscale Release Version': 'Grayscale Release Version',
  'Grayscale release version access rule':
    'Grayscale release version access rule',
  'Grayscale Release Version Number': 'Grayscale Release Version Number',
  'Has taken over all traffic': 'Has taken over all traffic',
  'Introduce traffic that meets the following rules into grayscale version':
    'Introduce traffic that meets the following rules into grayscale version',
  'Job offline': 'Job offline',
  'Job offline Successfully': 'Job offline Successfully',
  'Job Status': 'Job Status',
  'Mirrored traffic': 'Mirrored traffic',
  'Mirrored traffic is only receiving traffic, no service':
    'Mirrored traffic is only receiving traffic, no service',
  'No workload found': 'No workload found',
  'Not online': 'Not online',
  'Offline this version': 'Offline this version',
  'Operating System': 'Operating System',
  'Please input grayscale release version':
    'Please input grayscale release version',
  'Please select a grayscale release component':
    'Please select a grayscale release component',
  'Policy Config': 'Policy Config',
  'Port protocol is not HTTP, cannot publish policy by request content':
    'Port protocol is not HTTP, cannot publish policy by request content',
  'Prefix Match': 'Prefix Match',
  'Real-time traffic distribution': 'Real-time traffic distribution',
  'Real-time traffic ratio': 'Real-time traffic ratio',
  Recover: 'Recover',
  'Regex Match': 'Regex Match',
  'Release Job Name': 'Release Job Name',
  'Request duration': 'Request duration',
  'Request success rate': 'Request success rate',
  'Rule Description': 'Rule Description',
  'Take Over': 'Take Over',
  'Take over all traffic': 'Take over all traffic',
  'The current version is not online, you can let this version take over all traffic and bring it online.':
    'The current version is not online, you can let this version take over all traffic and bring it online.',
  traffic: 'traffic',
  'Traffic comes from the following operating systems':
    'Traffic comes from the following operating systems',
  'Traffic Control': 'Traffic Control',
  'Traffic Mirroring': 'Traffic Mirroring',
  'Traffic monitor': 'Traffic monitor',
  'Traffic of last five minutes': 'Traffic of last five minutes',
  'Traffic Ratio': 'Traffic Ratio',
  'Traffic Rules': 'Traffic Rules',
  'Two Versions': 'Two Versions',
  'Unfinished grayscale release jobs exist':
    'Unfinished grayscale release jobs exist',
  'Unsupported workload type': 'Unsupported workload type',
  'Version Compare': 'Version Compare',
  'version number is invalid': 'version number is invalid',
  'Version Off': 'Version Off',

  GRAY_RELEASE_CATEGORIES: 'Categorias',
  BLUE_GREEN_DEPLOYMENT_DESC: 'La versión azul-verde proporciona una implementación de tiempo de inactividad cero, lo que significa que la nueva versión se puede implementar con la antigua preservada. Permite que ambas versiones se ejecuten al mismo tiempo. Si hay un problema con la ejecución, puede volver rápidamente a la versión anterior.',
  CANARY_RELEASES_DESC: 'Este método trae parte del tráfico real a una nueva versión para probar su rendimiento y confiabilidad. Puede ayudar a detectar posibles problemas en el entorno real sin afectar la estabilidad general del sistema.',
  TRAFFIC_MIRROR_DESC: 'La duplicación de tráfico proporciona una forma más precisa de probar nuevas versiones, ya que los problemas se pueden detectar por adelantado sin afectar el entorno de producción. Por lo tanto, sirve como un método más seguro y confiable para los lanzamientos de versiones.',
  AB_TESTING_DESC: 'Este método es muy útil para comprender si las actualizaciones o mejoras del producto han cumplido con las expectativas. Se puede usar cuando surgen nuevas necesidades y no afectará la estabilidad del negocio.',

  NO_SERVICE_MESH_TIP:
    'Applications that are not enabled for application governance cannot be published in grayscale.',

  NO_GRAY_RELEASE_JOBS_TIP: 'No se está ejecutando un trabajo de liberación en escala de grises.',
  NO_GRAY_RELEASE_JOBS_TIP_2: 'Puede vincular estrategias de publicación en escala de grises para publicar trabajos de publicación en escala de grises.',
  TOTAL_GRAY_RELEASE_JOBS: 'Total de {num} trabajos de liberación en escala de grises',
  GRAY_RELEASE_VERSION_FORMAT_DESC: 'Solo puede contener letras minúsculas y números. La longitud máxima de caracteres se establece en 16.',
  GRAY_RELEASE_VERSION_DESC: 'Introducir la nueva versión en la malla del servicio de aplicaciones existente',
  POLICY_CONFIG_DESC: 'Versión basada en la relación de tráfico: de acuerdo con la regla de configuración de la relación de tráfico, la proporción especificada de tráfico se dividirá de la versión original a la versión en escala de grises.',
  GRAY_RELEASE_DESC: 'La versión en escala de grises representa un medio importante de actualización de productos de software en el entorno de producción. Proporciona un método de lanzamiento para la transición sin problemas de las aplicaciones de software a medida que se actualizan y se implementan.',
  GRAY_RELEASE_BY_CONTENT_TIP: 'Lanzamiento basado en el contenido de la solicitud: de acuerdo con la regla de configuración del contenido de la solicitud, solo el tráfico que cumpla ciertas condiciones en el contenido solicitado se dividirá en versiones en escala de grises. Esta política solo es válida para el acceso directo al servicio del portal.',
  MIRROR_POLICY_DESC: 'Los microservicios nos permiten entregar aplicaciones más rápido sin afectar la estabilidad del negocio. En este sentido, la duplicación del tráfico reduce el riesgo de cambios en el entorno de producción. </br> Con Traffic Mirroring, el tráfico de red en el entorno de producción se puede copiar en una versión en escala de grises, que sirve como una forma efectiva de probar la nueva versión antes de que se ejecute en el entorno real (con tráfico de usuarios en tiempo real).',
  RATIO_MODIFY_NOTIFY_CONTENT: 'Ha ajustado el índice de tráfico objetivo de la versión {versión} a {ratio}%, y puede continuar ajustando el índice de tráfico objetivo o hacer que surta efecto de inmediato.',
  CANARY_BY_TRAFFIC_DESC: 'De acuerdo con la regla proporcional del tráfico, el {ratio}% del tráfico solicitado al componente {componente} se reenvía a la versión en escala de grises {newVersion}.',
  DEPLOY_APP_CONFIRM: '¿Seguro de implementar una aplicación de muestra?',
  DEPLOY_APP_TIP: 'Implementará la aplicación de muestra {nombre}.',
  DEPLOY_SAMPLE_NO_INTERNET_ACCESS_TIP: 'La puerta de enlace para el gobierno de la aplicación no se encuentra en el proyecto actual, por lo que no puede implementar la aplicación de muestra. Póngase en contacto con el administrador de su proyecto para activarlo en [Configuración avanzada].',
  PREREQUEST_FOR_USE_GRAYRELEASE_Q: 'Requisitos previos para usar la versión en escala de grises?',
  PREREQUEST_FOR_USE_GRAYRELEASE_A: 'Debe crear una aplicación de composición antes de adoptar la versión en escala de grises y habilitar la función de gobierno del servicio para el servicio que utilizará la versión en escala de grises.',
  JOB_OFFLINE_WARNING: 'Antes de desconectar una tarea, primero debe seleccionar una versión disponible, que es asegurarse de que el servicio pueda funcionar sin problemas durante todo el proceso. Debe seleccionar una versión y desconectarla. Después de eso, el sistema transferirá automáticamente todo el tráfico a otra versión disponible.',
  JOB_OFFLINE_INFO: 'Ahora puede desconectar la tarea y se eliminará la versión {versión}.',

}
