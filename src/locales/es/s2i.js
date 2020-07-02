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
  SORT_BY: 'ordenar por nombre }',
  S2I_Building: 'esta construyendo',
  S2I_Failed: 'construcción fallida',
  S2I_Successful: 'construyendo el éxito',
  NEW_TAG_DESC: 'etiqueta de entrada de la nueva imagen',
  S2I_RELATIVE_PATH_DESC: 'Dirección del repositorio de código fuente (actualmente admite git) y puede asignar ramificaciones de código y rutas relativas en terminales de código fuente',
  START_COMMAND_DESC: 'Por defecto, el contenedor ejecuta el comando de imagen predeterminado. Puede cambiar el comando del contenedor desde aquí.',
  RUN_COMMAND_DESC: 'El comando de inicio del contenedor. Por defecto, se utilizará el comando de inicio para empaquetar. Utilice comas para separar múltiples comandos.',
  CONTAINER_PARAMS_DESC: 'Los parámetros del comando de inicio del contenedor. Utilice comas para separar varios.',
  CONTAINER_ENVIROMENT_DESC: 'Agregue la variable de entorno del contenedor.',
  IMAGE_PULL_POLICY_DESC: 'Por defecto, la imagen se extrae solo si aún no está presente localmente.',
  S2I_ENVIROMENT_DESC: 'Los desarrolladores de aplicaciones pueden usar las siguientes variables de entorno para configurar el comportamiento en tiempo de ejecución de esta imagen; para configuraciones detalladas, vea <a href={link} target="_blank">Compilar plantillas</a> .',
  S2I_UPDATE_WORKLOAD: 'Actualice la carga de trabajo después de construir con éxito',
  S2I_UPDATA_WORKLOAD_DESC: 'Una vez que la imagen se haya reconstruido correctamente, la imagen de la carga de trabajo relevante se actualizará y la versión de la carga de trabajo se actualizará.',
  IMAGE_FROM_S2I_DESC: 'Obtenga el código del repositorio de código existente y cree la imagen a través de Source to Image. El proceso de construir la imagen cada vez se realizará como un trabajo.',
  IMAGE_FROM_EXSIT: 'Seleccione un contenedor de despliegue de imagen existente',
  IMAGE_FROM_EXSIT_DESC: 'Extraiga una imagen de un repositorio de imágenes público o privado.',
  S2I_SECRET_DESC: 'Si es un repositorio de código privado, elija la clave del repositorio de código.',
  S2I_IMAGE_REPONSITRY_DESC: 'La dirección del repositorio del código fuente (actualmente es compatible con git). Puede especificar ramas de código y rutas relativas en el terminal del código fuente.',
  S2I_RELATIVE_PATH: 'Ruta relativa del código (opcional):',
  S2I_IMAGENAME_DESC: 'Nombre de la imagen y etiqueta, que por defecto es el nombre del proyecto del repositorio de código.',
  S2I_TARGET_IMAGE_REPONSTRY_DESC: 'Debe seleccionar un repositorio de imágenes con permisos push para almacenar la imagen. De lo contrario, puede <a href={link} target="_blank">crear una nueva credencial de repositorio de imágenes</a> .',
  S2I_BUILDERNAME_DESC: 'Seleccione el entorno de edición, también puede ver la <a href={link} target="_blank">plantilla de compilación correspondiente</a>',
  IMAGE_BUILDER_DESC: 'Image Builder es una herramienta que facilita la escritura de imágenes de contenedor que toman el código fuente de la aplicación o artefactos como entrada y producen una nueva imagen que ejecuta la aplicación ensamblada como salida. Incluye Source to Image, también conocido como S2I, que toma el código fuente como entrada, y Binary to Image, también conocido como B2I, que toma los artefactos de la aplicación como entrada.',
  'Build image for service x': 'Crear imagen para servicio {service}',
  S2I_DESC: 'Por favor elija su idioma de código fuente',
  IMAGE_FROM_S2I: 'Crea una nueva imagen a partir del código',
  IMAGE_FROM_B2I: 'Construye una nueva imagen del artefacto',
  B2I_DESC: 'Elija su artefacto para construir una imagen de contenedor',
  B2I_DEFAULT_DESC: 'Elija su artefacto para construir una imagen de contenedor',
  JAR_DESC: 'Un archivo JAR es un formato de archivo de paquete que se usa comúnmente para agregar una gran cantidad de archivos de clase Java, metadatos relacionados y archivos de recursos (texto, imágenes, etc.) en un archivo.',
  WAR_DESC: 'El archivo WAR es un archivo utilizado para distribuir una colección de archivos JAR, páginas JavaServer, Java Servlets, clases Java, archivos XML, bibliotecas de etiquetas, páginas web estáticas (HTML y archivos relacionados) y otros recursos que juntos constituyen una aplicación web.',
  BINARY_DESC: '',
  IMAGE_BUILDER_CREATE_DESC: 'Image Builder es una herramienta que facilita la escritura de imágenes de contenedor que toman el código fuente de la aplicación o artefactos como entrada y producen una nueva imagen que ejecuta la aplicación ensamblada como salida. Incluye Source to Image, también conocido como S2I, que toma el código fuente como entrada, y Binary to Image, también conocido como B2I, que toma los artefactos de la aplicación como entrada.',
  WRONG_FILE_EXTENSION_NAME: 'El tipo de archivo seleccionado no coincide, seleccione el tipo {type}',
  PROBE_COMMAND_DESC: 'Utilice comas para separar múltiples comandos.',

}