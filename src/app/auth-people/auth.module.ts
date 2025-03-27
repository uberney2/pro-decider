import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '../../context/AuthPeople/index';
import { AuthController } from './auth.controller';
import { AuthPeopleTypeOrmRepository } from '../../context/AuthPeople/infrastructure'
import { AuthLogin } from '../../context/AuthPeople/application'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

const { AuthPeopleEntity } = infrastructure;

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthPeopleEntity]),
        PassportModule,
        JwtModule.register({
            secret: 'secret_key',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [{
        provide: 'AuthPeopleRepository',
        useClass: AuthPeopleTypeOrmRepository
    },
        AuthLogin
    ],
    exports: [
        AuthLogin
    ],
})
export class AuthModule { }
