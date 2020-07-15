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
  _all: 'Todos los proyectos',
  Overview: 'Visión global',
  'Monitoring & Alerting': 'Monitorización y alertas',
  NUM_UNIT: '',
  DETAILS: 'Detalles',
  NODES: 'Nodos',
  NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones (&quot;-&quot;), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 63.',
  LONG_NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones (&quot;-&quot;), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 253.',
  NAME_TOO_LONG: 'La longitud máxima de caracteres se establece en 63.',
  LONG_NAME_TOO_LONG: 'La longitud máxima de caracteres se establece en 253.',
  LONG_DESC_TOO_LONG: 'La longitud máxima de caracteres se establece en 1000.',
  DESCRIPTION_DESC:
    'La descripción se agregará al elemento como un comentario y se mostrará en los detalles de la aplicación. La descripción está limitada a 1000 caracteres.',
  SHORT_DESCRIPTION_DESC: 'La descripción está limitada a 1000 caracteres.',
  PROJECT_DESC:
    'Los proyectos se agruparán por sus recursos, que puede ver y administrar por proyecto.',
  'MULTI-CLUSTER_PROJECT_CREATE_DESC':
    'Los proyectos se agruparán por sus recursos, que puede ver y administrar por proyecto.',
  DELETE_TITLE: '¿Seguro de eliminar {type}?',
  DELETE_TIP:
    '¿Está seguro de eliminar el {type} <strong>{resource}</strong> ? {type} no se puede recuperar después de eliminarlo.',
  DELETE_CONFIRM_TIP:
    'Ingrese el {tipo} nombre <strong>{recurso}</strong> para asegurarse de comprender los riesgos asociados con la operación.',
  DELETE_APP_RESOURCE_TIP:
    '<strong>{App}</strong> administra el recurso, lo que puede afectar el uso normal de esta aplicación si se elimina el recurso. Ingrese el {tipo} nombre <strong>{recurso}</strong> para asegurarse de comprender los riesgos asociados con la operación.',
  DELETE_CONFIRM_PLACEHOLDER: 'Por favor, ingrese {recurso}',
  DELETE_RESOURCE_TITLE: 'Advertencia',
  DELETE_RESOURCE_TIP:
    '¿Está seguro de eliminar el recurso <strong>{resource}</strong> ? El recurso no se puede recuperar después de eliminarlo.',
  DESTROY_TITLE: '¿Seguro de destruir?',
  DESTROY_TIP:
    '¿Estás seguro de destruir el {type} <strong>{resource}</strong> ?',
  LABEL_FORMAT_DESC:
    'La etiqueta tiene un máximo de 63 caracteres para clave y valor, la clave está limitada a 253 caracteres si contiene un nombre de dominio. Solo puede contener letras mayúsculas y minúsculas, números, guiones (&quot;-&quot;), guiones bajos (_) y puntos (.), Y debe comenzar y terminar con un número o letras.',
  add_: 'Añadir',
  REMOVE_MEMBER_TIP:
    '¿Está seguro de eliminar el miembro <strong>{resource}</strong> ?',
  ALIAS_DESC:
    'El alias puede estar compuesto de cualquier personaje para ayudarlo a distinguir mejor los recursos.',
  NOT_ENABLE: '{recurso} no está habilitado',
  NOT_AVAILABLE: 'No disponible {recurso}',
  NO_RESOURCE: 'No {recurso}',
  RESOURCE_NOT_FOUND: 'Lo sentimos, el recurso no se encuentra.',
  CREATE_TIME: 'Creado {diff}',
  UPDATE_TIME: '{Diff} actualizado',
  MONTH_AGO: '{count, plural, = 1 {1 month} other {# months}} ago',
  MONTH_TIME: '{cuenta, plural, = 1 {1 mes} otro {# meses}}',
  WEEK_AGO: 'Hace {count, plural, = 1 {1 semana} otras {# semanas}}',
  WEEK_TIME: '{cuenta, plural, = 1 {1 semana} otras {# semanas}}',
  DAY_AGO: '{count, plural, = 1 {1 day} other {# days}} ago',
  DAY_TIME: '{count, plural, =1 {1 día} other {# días}}',
  HOUR_AGO: '{count, plural, = 1 {1 hour} other {# hours}} ago',
  HOUR_TIME: '{count, plural, = 1 {1 hour} other {# hours}}',
  MINUTE_AGO: 'Hace {count, plural, = 1 {1 minuto} otro {# minutes}} hace',
  MINUTE_TIME: '{cuenta, plural, = 1 {1 minuto} otro {# minutos}}',
  TOTAL_ITEMS: 'Total de {num} artículos',
  EVENT_NORMAL: 'Normal',
  EVENT_WARNING: 'Advertencia',
  ASCENDING_ORDER: 'Orden ascendente',
  DESCENDING_ORDER: 'Orden descendiente',
  OPERATE: 'Funcionar',
  PLEASE_SELECT: 'Por favor seleccione',
  FILTER: 'Filtrar',
  CANCEL: 'Cancelar',
  NO_RESULTS_FOUND: 'No se han encontrado resultados',
  REACH_BOTTOM: 'Llegar al fondo',
  CLEAR_VALUE: 'Claro',
  QUOTA_LIMIT_TIP:
    'La configuración aquí se refiere a Límites en la gestión de recursos de Kubernetes, que se utiliza principalmente para limitar el valor máximo de los recursos utilizados por cada contenedor.',
  NOT_FOUND_DESC:
    '🙇 Lo sentimos, no se encontraron recursos relacionados, el sistema volverá a <a href="{link}">Workbench</a> después de {time} s',
  DETAIL_NOT_FOUND_DESC:
    '🙇 Lo sentimos, no se encontraron recursos relacionados, volver a <a href="{link}">{title}</a>',
  TOOLBOX_DESC:
    'La caja de herramientas proporciona búsqueda de registros y herramientas operativas de cli',
  PATTERN_NAME_INVALID_TIP:
    'Nombre no válido (admite letras minúsculas, números y -)',
  CONTENT_NOT_SAVED_TIPS: 'el contenido ha sido modificado pero no guardado',
  SAVE_EDIT_HINTS:
    'confirme que el contenido modificado es correcto, puede guardar la configuración o cancelar la configuración.',
  KS_DESCRIPTION:
    'KubeSphere es un proyecto de código abierto que tiene como objetivo proporcionar una plataforma de contenedores multiempresa de nivel empresarial sobre Kubernetes, la plataforma de orquestación de contenedores convencional actual. Proporciona una interfaz fácil de usar y operaciones de estilo asistente, reduciendo la curva de aprendizaje y el costo operativo de Kubernetes en términos del trabajo diario de desarrollo, prueba y mantenimiento.',
  REPS_ADDRESS: 'GitHub',
  ISSUE_FEEDBACK: 'Realimentación',
  PART_IN_DISCUSSION: 'Discusión',
  CODE_CONTRIBUTE: 'Contribución',
  GITHUB_STAR: 'Estrella',
  CONDITION_STATUS_ANALYSE: 'Condiciones',
  NAV_PROJECTS: 'Proyectos',
  NAV_ACCOUNTS: 'Cuentas',
  ALERT_WARNING: 'Advertencia',
  CREATE_STATUS_SUCCESS: 'Creado con éxito',
  CREATE_STATUS_UPDATING: 'Creando',
  CREATE_STATUS_FAILED: 'Creado sin éxito',
  EMPTY_WRAPPER: 'No se ha encontrado {recurso}',
  'rules text':
    '¿Cómo definir las reglas de recopilación de auditoría operativa?',
  'rules desc':
    'KubeSphere puede recopilar auditorías de operación de acuerdo con las reglas que establezca. Haga clic para ver cómo definir las reglas.',
  EVENT_CREATE_DESC:
    'Puede cambiar los criterios de búsqueda y buscar nuevamente.',
  KUBECTL_DESC:
    'Una herramienta de línea de comando para controlar el clúster Kubernetes actual',
  TOOLBOX_KUBECTL_DESC:
    'Una herramienta de línea de comando para controlar los grupos de Kubernetes',
  KUBECONFIG_DESC:
    'Un archivo que se usa para configurar el acceso al clúster Kubernetes actual',
  ENV_PRODUCTION: 'Producción',
  ENV_DEVELOPMENT: 'Desarrollo',
  ENV_TESTING: 'Pruebas',
  ENV_DEMO: 'Manifestación',
  CLUSTERS_MANAGE_DESC:
    'Gestión unificada de múltiples clústeres y sus recursos básicos, componentes y recursos de aplicaciones.',
  ACCESS_CONTROL_DESC:
    'Gestión unificada de espacios de trabajo, cuentas y acceso a roles.',
  APP_STORE_MANAGEMENT_DESC:
    'Gestión unificada del ciclo de vida de las aplicaciones nativas de la nube, incluida su publicación, eliminación y revisión',
  PLATFORM_SETTINGS_DESC:
    'Configuración de plataforma personalizada, que incluye información básica y recopilador de registros',
  DATA_SOURCE: 'Fuente de datos',
  LOG_SEARCH_DESC:
    'Una herramienta de búsqueda de registros multidimensional para espacios de trabajo, proyectos y recursos.',
  EVENT_SEARCH_DESC:
    'Una herramienta de búsqueda de eventos multidimensional para espacios de trabajo, proyectos y recursos.',
  PLATFORM_INFO_DESC:
    'Ver título de la plataforma, descripción y otra información',
  HOW_TO_MODIFY_PLATFORM_INFO:
    '¿Cómo modificar la información de la plataforma?',
  PLATFORM_SETTINGS_SELECTOR_DESC:
    'Configuraciones de plataforma personalizadas',
  AUDITING_OPERATING_DESC:
    'Una herramienta de búsqueda de auditoría multidimensional para espacios de trabajo, proyectos y recursos.',
  FILE_OVERSIZED_TIP: '¡El archivo cargado debe ser inferior a 2M!',
  MULTI_CLUSTER_TIP: 'El recurso se implementa en varios grupos.',
  HISTORY_DESC:
    'Cuando trabaje en múltiples áreas de trabajo o proyectos, su navegador web registrará la última ruta que visitó. Puede verificar su historial con F1, Win + K o Command + K, que le ayuda a cambiar rápidamente entre los recursos a los que accede.',
  NO_HISTORY_TITLE:
    'Su navegador web no ha registrado ningún historial de acceso a clústeres o espacios de trabajo.',
  NO_HISTORY_DESC:
    'Puede intentar acceder a recursos, como espacios de trabajo, clústeres o proyectos.',
  USER_GUIDES_DESC: 'La guía de usuario más completa de KubeSphere.',
  DEVELOPER_DESC:
    'Haga una pregunta en la comunidad de desarrolladores para obtener ayuda.',
  API_DOCS_DESC: 'La documentación más completa de la API de KubeSphere.',
  GITHUB_ISSUES_DESC: 'Plantee un problema en GitHub para obtener ayuda.',
}
