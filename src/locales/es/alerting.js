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
  load1: 'Carga de la CPU promedio 1 minuto',
  load5: 'Promedio de carga de la CPU 5 minutos',
  load15: 'Promedio de carga de la CPU 15 minutos',
  ALERT_TYPE: '{type} Alerta',
  ALERT_POLICY_TYPE: '{type} Política de alertas',
  ALERT_POLICY_DESC: 'Establecer reglas de alerta',
  ALERT_MESSAGE_DESC: 'Los mensajes de alerta se generan en función de las métricas de monitoreo y las políticas de alerta de carga de trabajo en el proyecto actual. Pueden ayudar a los usuarios a detectar problemas y responder a tiempo.',
  ALERT_POLICY_TRIGGER_RULE: 'Reglas de activación: se cumple cualquiera de las siguientes condiciones.',
  ALERT_METRIC_NAME: 'Nombre métrico',
  ALERT_COMMENT: 'Comentario',
  ALERT_COMMENT_DESC: 'Los comentarios se conservarán como registros para el procesamiento de alertas, pero no como un medio para manejar las alertas. La información de registro se utilizará para verificar el estado de procesamiento de las alertas.',
  ALERT_POLICY_SETTING_TITLE: 'La política de alerta relevante no se establece temporalmente',
  ALERT_POLICY_SETTING_DESC: 'Puede encontrar la condición anormal del recurso a tiempo estableciendo las reglas de alerta',
  ALERTING_POLICY_CREATE_DESC: 'Puede encontrar la condición anormal del recurso a tiempo estableciendo las reglas de alerta',
  'ALERTING-POLICY_BASEINFO_DESC': 'Establecer información básica sobre la política de alerta',
  'ALERTING-POLICY_MONITORING-TARGET_DESC': 'Seleccione el objetivo de supervisión de la política de alertas.',
  'ALERTING-POLICY_ALERTING-RULE_DESC': 'Establecer reglas de alerta',
  'ALERTING-POLICY_NOTIFICATION-RULE_DESC': 'Establecer reglas de notificación',
  TOTAL_POLICIES: 'Total {num} políticas de alerta',
  PERIOD_OPTIONS: '{valor, plural, = 1 {1 minuto / período} otro {# minutos / período}}',
  CONSECUTIVE_OPTIONS: '{valor} veces consecutivas',
  MAX_SEND_NOT_LIMIT: 'No limitado',
  MAX_SEND_COUNT: 'Reenviar hasta {count}',
  REPEAT_CUSTOM_TITLE: 'Personalizar reglas de repetición',
  REPEAT_CUSTOM_DESC: 'Los mensajes de alerta se enviarán repetidamente a intervalos específicos según su gravedad. La política predeterminada se adoptará a menos que realice algún cambio en ella.',
  REPEAT_INTERVAL_NOT_REPEAT: 'No repetir',
  REPEAT_INTERVAL_MINUTE: 'Alerta una vez cada {num} minutos',
  REPEAT_INTERVAL_HOUR: 'Alerta una vez cada {num} hora',
  REPEAT_INTERVAL_DAY: 'Alerta una vez cada {num} días',
  REPEAT_INTERVAL_EXP: 'Periodo exponencial incremental',
  REPEAT_RULE_EXP_TIP: 'Notificación de incremento de índice periódico: cuando la duración de la alerta alcanza 1, 2, 4, 8, 16, 32 ... veces del período de estadísticas de alerta, se envía una notificación de alerta.',
  REPEAT_RULE_TIPS: 'Los mensajes de alerta se enviarán repetidamente según su gravedad. Por defecto, <strong>la alerta crítica se repite cada 30 minutos</strong> / <strong>la alerta mayor se repite cada 2 horas</strong> / la <strong>alerta menor no se repite</strong> . <br> Si necesita modificar las reglas de repetición, personalice la configuración en la sección Regla de notificación (siguiente sección).',
  NOTIFY_TIME_LABEL: 'Rango de tiempo de notificación efectivo',
  NOTIFY_TIME_TIP: 'Puede establecer un rango de tiempo efectivo para un mensaje de alerta.',
  NOTIFY_LIST_ADD_TIP: 'Presione el botón enter o haga clic para agregar',
  NOTIFY_LIST_INPUT_ERRPR_TIP: 'El formato de entrada es incorrecto. Por favor, introduzca la dirección de correo electrónico correcta.',
  NOTIFY_LIST_INPUT_PLACEHOLDER: 'Ingrese la dirección de correo electrónico del miembro para ser notificado.',
  NOTIFY_CURRENT_COUNT: 'Tiempos de notificación: {count} en total',
  RESOURCE_SELECTOR_FORM_TIP: 'Por favor complete el selector de etiquetas',
  RESOURCE_NODE_FORM_TIP: 'Seleccione un nodo de clúster',
  RESOURCE_WORKLOAD_FORM_TIP: 'Por favor seleccione una carga de trabajo',
  SEVERITY_MSG_FIXED_MINUTES: 'Notificar cada {cuenta} minutos',
  SEVERITY_MSG_NO_LIMIT: 'No limitado',
  SEVERITY_MSG_EXP: 'Aviso por periodo exponencial',
  SEVERITY_MSG_NOT_REPEAT: 'No hay notificaciones repetidas',
  ALERT_RULE_STATUS_OCCURRED: 'Alertando',
  ALERT_RULE_STATUS_NO_OCCURRED: 'Aún no alerta',
  SENT_RULE_TIME_TITLE: 'Periodo de tiempo efectivo',
  SENT_RULE_CHANNEL_TITLE: 'Método de notificación',
  REQUESTS_FOR_TRIGGER_AN_ALARM_Q: '¿Requisitos previos para activar un mensaje de alerta?',
  REQUESTS_FOR_TRIGGER_AN_ALARM_A: 'Debe establecer una política de alerta para un recurso. Cuando un determinado indicador de un recurso alcanza el umbral de la política de alerta, el mensaje se activa y empuja.',
  REQUESTS_FOR_PUSH_AN_ALARM_Q: '¿Requisitos previos para un mensaje push de política de alerta?',
  REQUESTS_FOR_PUSH_AN_ALARM_A: 'El administrador de la plataforma debe configurar el servidor de correo.',
  HOW_TO_SUPRESS_AN_ALARM_Q: '¿Cómo suprimir mensajes de alerta?',
  HOW_TO_SUPRESS_AN_ALARM_A: 'Cada política de alerta se puede establecer en diferentes niveles, y cada nivel corresponde a un período de alerta y período de repetición diferente.',
  PROJECT_MONITOR_TARGET_TIPS: 'Una alerta puede especificar solo una política de tipo de recurso',
  RULE_NAME_DESC: 'El nombre de la regla puede estar compuesto de cualquier carácter para ayudarlo a distinguir mejor los recursos.',

}