# LawNest - Generador de Contratos Legales

Proyecto web en **React + Tailwind CSS** para un buffet de abogados, preparado con entorno aislado en **Docker** y volumen persistente.

## 🔗 Enlace al Repositorio
[https://github.com/masterdan-mx/Abogados](https://github.com/masterdan-mx/Abogados)

## 📌 Características
1. **Pantalla de Inicio de Sesión (`Login.jsx`)**:
   - Diseño corporativo institucional en 2 columnas.
   - Panel izquierdo con imagen de la Justicia (`justicia.jpg`), monograma **LN**, título *JURISPRUDENCIAL* y badge *Sistema Corporativo v1.0*.
   - Panel derecho con correo de buffet (`abogado@lawnest.com`), contraseña, visibilidad y accesos SSO.

2. **Panel de Generación de Contratos (`ContractDashboard.jsx`)**:
   - Selector de Tipo de Contrato (*Arrendamiento, NDA, Servicios, Compraventa*).
   - Entradas de texto en tiempo real (*Nombre 1, Nombre 2, Dirección 1, Plazo, Renta Mensual*).
   - Acciones de exportación: *Vista Previa, Generar PDF (jsPDF + html2canvas), Enviar Mail, Enviar WhatsApp*.

3. **Entorno Docker**:
   - `Dockerfile` basado en Node 20.
   - `docker-compose.yml` con volumen de datos persistente `contratos_data`.

## 🚀 Cómo ejecutar con Docker
```bash
docker compose up --build
```
Abre tu navegador en: [http://localhost:5173](http://localhost:5173)
