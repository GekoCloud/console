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
  '95% requests duration': '95% de duración de solicitudes',
  'A/B Testing': 'Prueba A / B',
  'Allocate all traffic proportionally to grayscale release components':
    'Asigne todo el tráfico proporcionalmente a los componentes de liberación en escala de grises',
  'Blue-green Deployment': 'Despliegue azul-verde',
  'Canary Release': 'Lanzamiento Canario',
  'Cookie Content': 'Contenido de cookies',
  'Create Grayscale Release Job':
    'Crear trabajo de lanzamiento en escala de grises',
  'Create Job': 'Crear trabajo',
  'Custom Header': 'Cabecera personalizada',
  'Deploy sample application': 'Implementar aplicación de muestra',
  'Deploy Sample Application': 'Implementar aplicación de muestra',
  'Edit Grayscale Release Job':
    'Editar trabajo de lanzamiento en escala de grises',
  'Exact Match': 'Coincidencia exacta',
  'Forward by request content': 'Reenviar por contenido de solicitud',
  'Forward by traffic ratio': 'Reenviar por relación de tráfico',
  'Grayscale Release': 'Lanzamiento en escala de grises',
  'Grayscale Release Component':
    'Componente de lanzamiento en escala de grises',
  'Grayscale Release Components':
    'Componentes de lanzamiento en escala de grises',
  'Grayscale Release Strategy': 'Estrategia de lanzamiento en escala de grises',
  'Grayscale Release Version': 'Versión de lanzamiento en escala de grises',
  'Grayscale release version access rule':
    'Regla de acceso a la versión de lanzamiento en escala de grises',
  'Grayscale Release Version Number':
    'Número de versión de lanzamiento en escala de grises',
  'Has taken over all traffic': 'Se ha apoderado de todo el tráfico',
  'Introduce traffic that meets the following rules into grayscale version':
    'Introducir tráfico que cumpla con las siguientes reglas en la versión en escala de grises',
  'Job offline': 'Trabajo fuera de línea',
  'Job offline Successfully': 'Trabajo fuera de línea con éxito',
  'Job Status': 'Estado del trabajo',
  'Mirrored traffic': 'Tráfico reflejado',
  'Mirrored traffic is only receiving traffic, no service':
    'El tráfico reflejado solo recibe tráfico, no hay servicio',
  'No workload found': 'No se encontró carga de trabajo',
  'Not online': 'Fuera de linea',
  'Offline this version': 'Desconectado esta versión',
  'Operating System': 'Sistema operativo',
  'Please input grayscale release version':
    'Ingrese la versión de lanzamiento en escala de grises',
  'Please select a grayscale release component':
    'Selecciona un componente de lanzamiento en escala de grises',
  'Policy Config': 'Configuración de política',
  'Port protocol is not HTTP, cannot publish policy by request content':
    'El protocolo del puerto no es HTTP, no puedes publicar la política por el contenido de la solicitud',
  'Prefix Match': 'Partido de prefijo',
  'Real-time traffic distribution': 'Distribución de tráfico en tiempo real.',
  'Real-time traffic ratio': 'Ratio de tráfico en tiempo real',
  Recover: 'Recuperar',
  'Regex Match': 'Regex Match',
  'Release Job Name': 'Liberar nombre del trabajo',
  'Request duration': 'Duración de la solicitud',
  'Request success rate': 'Solicitar tasa de éxito',
  'Rule Description': 'Descripción de la regla',
  'Take Over': 'Tomar el control',
  'Take over all traffic': 'Hacerse cargo de todo el tráfico',
  'The current version is not online, you can let this version take over all traffic and bring it online.':
    'La versión actual no está en línea, puedes dejar que esta versión se haga cargo de todo el tráfico y ponerlo en línea.',
  traffic: 'tráfico',
  'Traffic comes from the following operating systems':
    'El tráfico proviene de los siguientes sistemas operativos',
  'Traffic Control': 'Control de trafico',
  'Traffic Mirroring': 'Reflejo de tráfico',
  'Traffic monitor': 'Monitor de tráfico',
  'Traffic of last five minutes': 'Tráfico de los últimos cinco minutos',
  'Traffic Ratio': 'Ratio de tráfico',
  'Traffic Rules': 'Normas de tráfico',
  'Two Versions': 'Dos versiones',
  'Unfinished grayscale release jobs exist':
    'Existen trabajos de liberación en escala de grises sin terminar',
  'Unsupported workload type': 'Tipo de carga de trabajo no compatible',
  'Version Compare': 'Comparar versiones',
  'version number is invalid': 'el número de versión no es válido',
  'Version Off': 'Versión desactivada',
  GRAY_RELEASE_CATEGORIES: 'LLAMANOS',
  BLUE_GREEN_DEPLOYMENT_DESC:
    'La versión blue-green proporciona un despliegue sin downtime, lo que significa que la nueva versión se puede desplegar junto a la antigua. Permite que ambas versiones se ejecuten al mismo tiempo. Si hay un problema con la ejecución, puedes volver rápidamente a la versión anterior.',
  CANARY_RELEASES_DESC:
    'Este método trae parte del tráfico real a una nueva versión para probar su rendimiento y confiabilidad. Puedes ayudar a detectar posibles problemas en el entorno real sin afectar la estabilidad general del sistema.',
  TRAFFIC_MIRROR_DESC:
    'La duplicación de tráfico proporciona una forma más precisa de probar nuevas versiones, ya que los problemas se pueden detectar por adelantado sin afectar el entorno de producción. Por lo tanto, sirve como un método más seguro y confiable para los lanzamientos de versiones.',
  AB_TESTING_DESC:
    'Este método es muy útil para comprender si las actualizaciones o mejoras del producto han cumplido con las expectativas. Se puedes usar cuando surgen nuevas necesidades y no afectará la estabilidad del negocio.',
  NO_SERVICE_MESH_TIP:
    'Las aplicaciones que no están habilitadas para el gobierno de aplicaciones no se pueden publicar en escala de grises.',
  NO_GRAY_RELEASE_JOBS_TIP:
    'No se está ejecutando un trabajo de liberación en escala de grises.',
  NO_GRAY_RELEASE_JOBS_TIP_2:
    'Puedes vincular estrategias de publicación en escala de grises para publicar trabajos de publicación en escala de grises.',
  TOTAL_GRAY_RELEASE_JOBS:
    'Total de {num} trabajos de liberación en escala de grises',
  GRAY_RELEASE_VERSION_FORMAT_DESC:
    'Solo puedes contener letras minúsculas y números. La longitud máxima de caracteres se establece en 16.',
  GRAY_RELEASE_VERSION_DESC:
    'Introducir la nueva versión en la malla del servicio de aplicaciones existente',
  POLICY_CONFIG_DESC:
    'Versión basada en la relación de tráfico: de acuerdo con la regla de configuración de la relación de tráfico, la proporción especificada de tráfico se dividirá de la versión original a la versión en escala de grises.',
  GRAY_RELEASE_DESC:
    'La versión en escala de grises representa un medio importante de actualización de productos de software en el entorno de producción. Proporciona un método de lanzamiento para la transición sin problemas de las aplicaciones de software a medida que se actualizan y se implementan.',
  GRAY_RELEASE_BY_CONTENT_TIP:
    'Lanzamiento basado en el contenido de la solicitud: de acuerdo con la regla de configuración del contenido de la solicitud, solo el tráfico que cumpla ciertas condiciones en el contenido solicitado se dividirá en versiones en escala de grises. Esta política solo es válida para el acceso directo al servicio del portal.',
  MIRROR_POLICY_DESC:
    'Los microservicios nos permiten entregar aplicaciones más rápido sin afectar la estabilidad del negocio. En este sentido, la duplicación del tráfico reduce el riesgo de cambios en el entorno de producción. </br> Con Traffic Mirroring, el tráfico de red en el entorno de producción se puedes copiar en una versión en escala de grises, que sirve como una forma efectiva de probar la nueva versión antes de que se ejecute en el entorno real (con tráfico de usuarios en tiempo real).',
  RATIO_MODIFY_NOTIFY_CONTENT:
    'Ha ajustado el índice de tráfico objetivo de la versión {version} a {ratio}%, y puedes continuar ajustando el índice de tráfico objetivo o hacer que surta efecto de inmediato.',
  CANARY_BY_TRAFFIC_DESC:
    'De acuerdo con la regla proporcional del tráfico, el {ratio}% del tráfico solicitado al componente {component} se reenvía a la versión en escala de grises {newVersion}.',
  DEPLOY_APP_CONFIRM: '¿Seguro de implementar una aplicación de muestra?',
  DEPLOY_APP_TIP: 'Implementará la aplicación de muestra {name}.',
  DEPLOY_SAMPLE_NO_INTERNET_ACCESS_TIP:
    'La puerta de enlace para el gobierno de la aplicación no se encuentra en el proyecto actual, por lo que no puedes implementar la aplicación de muestra. Póngase en contacto con el administrador de su proyecto para activarlo en [Configuración avanzada].',
  PREREQUEST_FOR_USE_GRAYRELEASE_Q:
    'Requisitos previos para usar la versión en escala de grises?',
  PREREQUEST_FOR_USE_GRAYRELEASE_A:
    'Debe crear una aplicación de composición antes de adoptar la versión en escala de grises y habilitar la función de gobierno del servicio para el servicio que utilizará la versión en escala de grises.',
  JOB_OFFLINE_WARNING:
    'Antes de desconectar una tarea, primero debe seleccionar una versión disponible, que es asegurarse de que el servicio pueda funcionar sin problemas durante todo el proceso. Debe seleccionar una versión y desconectarla. Después de eso, el sistema transferirá automáticamente todo el tráfico a otra versión disponible.',
  JOB_OFFLINE_INFO:
    'Ahora puedes desconectar la tarea y se eliminará la versión {versión}.',
}
