// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service'; // Puedes borrar esta línea si no lo vas a usar

@Controller() // Este controlador heredará el prefijo global 'api/v1' de main.ts
export class AppController {
@Get('api/v1')
  getApiRoot(): { message: string } {
    return { message: 'Bienvenido a la API v1. ¡Todo funciona desde la raíz! 🎉' };
  }
}