import { Injectable } from '@nestjs/common';
import { User } from './model/User';
import db = require('./db/user');
/**
 * Consultando um banco de dados mockado com json para simular data fetching em tempo real
 */
@Injectable()
export class AppService {
  findUserByUserId(id: number): User {
    return db.findUserByID(id);
  }
}
