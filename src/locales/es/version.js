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
  'Activate App': 'Activar aplicación',
  'Activate Version': 'Activar versión',
  Activated: 'Activado',
  admin: 'administración',
  'App Information': 'Información de la aplicación',
  'App Instances': 'Instancias de aplicaciones',
  'Audit Records': 'Registros de auditoria',
  business: 'negocio',
  'Cancel Review': 'Cancelar revisión',
  ceasing: 'cesar',
  creating: 'creando',
  'Delete Version': 'Eliminar versión',
  deleting: 'borrando',
  'Deployed Instances': 'Instancias desplegadas',
  'Develop and test guide': 'Desarrollar y probar la guía',
  developer: 'desarrollador',
  Developing: 'Desarrollando',
  'Download Successfully': 'Descargar con éxito',
  Draft: 'Sequía',
  global_admin: 'global_admin',
  'in-review': 'en revisión',
  'In-review': 'En revisión',
  isv: 'isv',
  'No version info': 'Sin información de versión',
  Pass: 'Pasar',
  Passed: 'Pasado',
  'Pending-review': 'Revisión pendiente',
  Published: 'Publicado',
  Recall: 'Recordar',
  Recalled: 'Retirado del mercado',
  Reject: 'Rechazar',
  Rejected: 'Rechazado',
  Release: 'Lanzamiento',
  'Release to Store': 'Liberar a la tienda',
  Review: 'revisión',
  Starting: 'Comenzando',
  Stopping: 'Parada',
  Submit: 'Enviar',
  'Submit Review': 'Enviar opinión',
  Submitted: 'Presentada',
  'Suspend App': 'Suspender aplicación',
  'Suspend Version': 'Suspender versión',
  Suspended: 'Suspendido',
  technical: 'técnico',
  'Test Steps': 'Pasos de prueba',
  'Version Management': 'Gestión de versiones',
  'Version update info': 'Información de actualización de versión',
  Versions: 'Versiones',
  'View in Store': 'Ver en la tienda',
  Working: 'Trabajando',
  'Wrong version number format': 'Formato de número de versión incorrecto',
  VERSION_DELETE_TIP:
    '¿Está seguro de eliminar la versión <strong>{nombre}</strong> ?',
  VERSION_SUBMIT_TIP:
    '¿Está seguro de enviar la versión <strong>{nombre}</strong> para auditoría?',
  VERSION_CANCEL_TIP:
    '¿Está seguro de cancelar la revisión de la versión <strong>{nombre}</strong> ?',
  VERSION_RELEASE_TIP:
    'Los usuarios pueden ver e implementar la versión <strong>{nombre}</strong> en la tienda cuando se lance. ¿Estás seguro de lanzarlo ahora?',
  VERSION_SUSPEND_TIP:
    'La versión <strong>{nombre}</strong> no se mostrará en la tienda cuando se suspenda. ¿Estás seguro de suspenderlo ahora?',
  VERSION_RECOVER_TIP:
    'La versión <strong>{nombre}</strong> se mostrará nuevamente en la tienda. ¿Estás seguro de activarlo ahora?',
  APP_SUSPEND_TIP:
    'La aplicación <strong>{nombre}</strong> no se puede comprar en la tienda cuando está suspendida. ¿Estás seguro de suspenderlo ahora?',
  APP_RECOVER_TIP:
    'La aplicación <strong>{nombre}</strong> y las versiones suspendidas se mostrarán nuevamente en la tienda. ¿Estás seguro de activarlo ahora?',
  PACKAGE_FILE_DESC:
    'Paquete.json, que describe la información básica de una aplicación o versión, como el nombre y el número de versión.',
  CONFIG_FILE_DESC: 'Perfil predeterminado de la aplicación',
  LICENSE_FILE_DESC: 'Protocolo en formato de texto',
  LOCALE_ES__FILE_DESC:
    'Traducción al español para la configuración de la aplicación',
  LOCALE_EN__FILE_DESC:
    'Traducción al inglés para la configuración de la aplicación',
  LOCALE_ZH_FILE_DESC:
    'Traducción al chino para la configuración de la aplicación',
  CHART_FILE_DESC:
    'Archivo Yaml, que se utiliza para describir la información básica de Chart, como el nombre y la versión.',
  README_FILE_DESC: 'Introducción a la aplicación e instrucciones',
  REQUIREMENTS_FILE_DESC:
    'Archivos de descripción para almacenar otros gráficos que actualmente dependen del gráfico',
  VALUES_FILE_DESC: 'Archivo de configuración predeterminado del gráfico',
  CHARTS_FILE_DESC:
    'Coloque otros gráficos de los que depende actualmente el gráfico en este directorio',
  TEMPLATES_FILE_DESC:
    'Implemente el directorio de plantilla de archivo, complete el valor correspondiente en values.yaml y genere el archivo de configuración final de kubernetes',
  NOTES_FILE_DESC: 'Guía de uso',
  VERSION_SUBMIT_TEST_STEPS: `
    1. Todos los cuadros dependientes han sido enviados <br/> 
    2. Verificación estática exitosa (pelusa del timón) <br/> 
    3. Inicio exitoso de aplicaciones (instalación de timón) con valores predeterminados: todos los pods están ejecutando el estado y todos los servicios de servicio tienen al menos un punto final &lt;br /&gt; 
    4. No hay vulnerabilidad de seguridad en los espejos utilizados <br/> 
    5. Actualización de soporte <br/> 
    6. Admite la configuración de aplicaciones personalizadas <br/> 
    7. No use la función alfa de Kubernetes <br/> 
    8. Se requieren archivos README detallados, incluida la introducción de aplicaciones, condiciones previas y cómo personalizar los parámetros de configuración <br/>`,
  VERSION_SUBMIT_NOTE:
    'Antes de enviar para su revisión, asegúrese de que su solicitud haya pasado las siguientes funciones básicas',
  VERSION_SUBMIT_DOC: 'Consulte un manual de prueba más completo',
  VERSION_NUMBER_DESC:
    'La identificación importante de la versión. Solo puede contener números, puntos decimales y corchetes (&quot;[]&quot;), y debe comenzar con un número y contener puntos decimales.',
  VERSION_NUMBER_ERROR_NOTE:
    'Formato de número de versión incorrecto. Solo puede contener números, puntos decimales y corchetes (&quot;[]&quot;), y debe comenzar con un número y contener puntos decimales.',
  UPDATE_LOG_DESC: 'Se usa para describir los detalles de esta actualización.',
}
