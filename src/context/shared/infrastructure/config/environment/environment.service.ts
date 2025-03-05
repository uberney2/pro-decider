import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getAppEnv(): string | undefined {
    return this.configService.get<string>('APP_ENV');
  }

  getDatabaseHost(): string | undefined{
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number | undefined {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string | undefined{
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string | undefined{
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string | undefined{
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseSchema(): string | undefined{
    return this.configService.get<string>('DATABASE_SCHEMA');
  }

  getDatabaseSync(): boolean | undefined{
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  getJAuthUrl(): string | undefined{
    return this.configService.get<string>('JAUTH_URL');
  }

  getJAuthAppCode(): string | undefined{
    return this.configService.get<string>('JAUTH_APP_CODE');
  }

  getJAuthAppSecret(): string | undefined{
    return this.configService.get<string>('JAUTH_APP_SECRET');
  }

  getJauthUiRedirectUrl(): string | undefined{
    return this.configService.get<string>('JAUTH_UI_REDIRECT_URL');
  }
}
