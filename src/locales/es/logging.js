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
  Activate: 'Activate',
  'Add Log Collector': 'Add Log Collector',
  'Add Service Address': 'Add Service Address',
  Address: 'Address',
  'Auditing statistics': 'Auditing statistics',
  'Back to previous': 'Back to previous',
  'Change Status': 'Change Status',
  Collecting: 'Collecting',
  'Current Statistics Start Time': 'Current Statistics Start Time',
  'Delete Log Collector': 'Delete Log Collector',
  'Display Content': 'Display Content',
  'Event statistics': 'Event statistics',
  'Exact Query': 'Exact Query',
  'Fuzzy Query': 'Fuzzy Query',
  'Hide help information': 'Hide help information',
  Keyword: 'Keyword',
  'Log Collections': 'Log Collections',
  'Log Collector': 'Log Collector',
  'Log Management': 'Log Management',
  'Log Query': 'Log Query',
  'Log Start Time': 'Log Start Time',
  'Log statistics': 'Log statistics',
  'No cluster with auditing module enabled':
    'No cluster with auditing module enabled',
  'No cluster with event query enabled': 'No cluster with event query enabled',
  'No cluster with logging module enabled':
    'No cluster with logging module enabled',
  'Passwords must be at least 6 characters long':
    'Passwords must be at least 6 characters long',
  'Please enter a filter to search for logs.':
    'Please enter a filter to search for logs.',
  'Please input path': 'Please input path',
  'Please input service address': 'Please input service address',
  'Real-Time Data': 'Real-Time Data',
  'Recently Configured Updated': 'Recently Configured Updated',
  'Recently Updated': 'Recently Updated',
  'Refresh Interval': 'Refresh Interval',
  'Refresh Rate': 'Refresh Rate',
  'Region Data': 'Region Data',
  'Release Collection': 'Release Collection',
  'Search Result': 'Search Result',
  'Search Rule': 'Search Rule',
  'Service Address': 'Service Address',
  'Time topology': 'Time topology',
  topic: 'topic',
  'Trends in the total number of auditing logs in the last 12 hours':
    'Trends in the total number of auditing logs in the last 12 hours',
  'Trends in the total number of events in the last 12 hours':
    'Trends in the total number of events in the last 12 hours',
  'Trends in the total number of logs in the last 12 hours':
    'Trends in the total number of logs in the last 12 hours',
    
  LOG_DATE: 'AAAA / MM / DD HH: mm',
  EVENT_DATE: 'AAAA / MM / DD 00:00',
  ES_DESC: 'Elasticsearch es un motor de búsqueda y análisis distribuido y RESTful.',
  KAFKA_DESC: 'Kafka es una popular plataforma de procesamiento de flujo de código abierto.',
  FLUENTD_DESC: 'Fluentd es un recopilador de datos de código abierto para la capa de registro unificada.',
  TOTAL_COLLECTIONS: 'Total de {num} recolectores de registros',
  TOOLBOX_SHIFT_TIPS: '👻 Puede abrir la página en una nueva ventana con &quot;MAYÚS + CLIC IZQUIERDO&quot;.',
  LOG_COLLECTION_DESC: 'El sistema recopilará los registros stdout y stderr de cada contenedor y los enviará a uno o más servicios de destino.',
  LOG_COLLECTION_ENABLE_TIPS: 'El nuevo estado tarda aproximadamente 1 minuto en surtir efecto.',
  LOG_COLLECTION_FLUENTD_USER_TIPS: 'Nombre de usuario para autenticación',
  LOG_COLLECTION_FLUENTD_URL_TIPS: 'Ingrese la dirección del Fluentd que recibe el registro.',
  EMPTY_LOG_COLLECTIONS: 'El recopilador de registros no está configurado temporalmente. Puede agregar un recopilador de registros para exportar el registro al recopilador de registros externo.',
  LOG_COLLECTION_TIPS: 'Solo se puede agregar un recopilador de registros para cada tipo. Si ya hay uno agregado, solo puede editarlo.',
  URL_SYNTAX_ERROR: 'Error de sintaxis de URL',
  LOG_COLLECTION_ES_URL_TIPS: 'El servicio incorporado Elasticsearch se usa de manera predeterminada. Puede cambiarlo para usar un servicio Elasticsearch implementado por usted mismo dentro o fuera del clúster.',
  LOG_COLLECTION_ES_USER_TIPS: 'Si su elasticsearch tiene la función de autenticación local incorporada en x-pack, configure un nombre de usuario y contraseña.',
  'Search Log by': 'Buscar registro por {campo}',
  'KeyWord Log Query Tip': 'Ingrese la palabra clave para encontrar el registro. También puede encontrar el registro de errores por palabras clave como &quot;Error&quot;, &quot;Fail&quot;, &quot;Fatal&quot;, &quot;Exception&quot; y &quot;Warning&quot;.',
  'Project Log Query Tip': 'Puede ver la información de registro relacionada de acuerdo con el nombre del proyecto.',
  'Workload Log Query Tip': 'Puede ver la información de registro relacionada de acuerdo con el nombre de la carga de trabajo.',
  'Container Log Query Tip': 'Puede ver la información de registro relacionada de acuerdo con el nombre del contenedor.',
  'Pod Log Query Tip': 'Puede ver la información de registro relacionada de acuerdo con el nombre del pod.',
  'Search Events by': 'Buscar eventos por {campo}',
  'Workspace Event Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el espacio de trabajo.',
  'Project Event Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el proyecto.',
  'Resource Type Event Query Tip': 'Puede ver información de eventos relacionados según el tipo de recurso.',
  'Resource Name Event Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el nombre del recurso.',
  'Message Event Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el mensaje.',
  'Category Event Query Tip': 'Puede ver información relacionada del evento según la categoría.',
  'Reason Event Query Tip': 'Puede ver información relacionada con el evento según el motivo.',
  'Pod Event Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el nombre del pod.',
  TOTAL_LOGS: 'Un total de <span class={className}>{logs}</span> registros de <br/> Se recogieron <span class={className}>{contenedores}</span> contenedores.',
  TIME_S: '{Si} s',
  CONTAINER_REAL_TIME_LOGS_UNSUPPORTED_TIPS: 'El contenedor no admite registros en tiempo real en el estado actual, intente nuevamente más tarde.',
  TOTAL_LOGS_TODAY: 'Hoy se recolectó un total de <span class={className}>{logs}</span> registros de <span class={className}>{contenedores}</span> contenedores.',
  TOTAL_EVENTS_TODAY: 'Hoy se recopilaron un total de <span class={className}>{eventos}</span> eventos.',
  NO_EVENTS_TODAY: 'Eventos no encontrados hoy',
  START_REAL_TIME_LOG: 'activar el registro en tiempo real',
  STOP_REAL_TIME_LOG: 'desactivar el registro en tiempo real',
  LOG_EXPORT: 'Exportar registro',
  CREATE_CUSTOM_MONITORING_DASHBOARD: 'Crear un panel de monitoreo personalizado',
  SELECT_SUITABLE_MONITORING_TEMPLATE: 'Seleccione la plantilla de monitoreo adecuada',
  CUSTON_MONITORING_TEMPLATE_DESC: 'La configuración predeterminada del panel de monitoreo se creará según el tipo de aplicación.',
  CUSTOM_MONITORING_DASHBOARD: 'Panel de control personalizado',
  SERVICE_BUILT_INTERFACE: 'la supervisión del servicio se construye captura de datos de interfaz',
  'Search Auditing by': 'Auditoría de búsqueda por {campo}',
  'Workspace Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el espacio de trabajo.',
  'Project Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el proyecto.',
  'Resource Name Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el nombre del recurso.',
  'Resource Type Auditing Query Tip': 'Puede ver información de eventos relacionados según el tipo de recurso.',
  'Verb Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el verbo.',
  'Status Code Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con el código de estado.',
  'Operation Account Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con la cuenta de operación.',
  'Source IP Auditing Query Tip': 'Puede ver información de eventos relacionados de acuerdo con la IP de origen.',
  TOTAL_AUDITING_TODAY: 'Hoy se recopiló un total de <span class={className}>{auditing}</span> registros de auditoría.',
  NO_AUDITING_TODAY: 'Registros de auditoría no encontrados hoy',
  LOGGING_LOG_COLLECTOR: 'Log Collector',
  EVENTS_LOG_COLLECTOR: 'Recopilador de registro de eventos',
  AUDITING_LOG_COLLECTOR: 'Auditing Log Collector',

}
