import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        // Alternative: Use individual variables
        // host: configService.get<string>('DB_HOST'),
        // port: configService.get<number>('DB_PORT', 5432),
        // username: configService.get<string>('DB_USERNAME'),
        // password: configService.get<string>('DB_PASSWORD'),
        // database: configService.get<string>('DB_DATABASE'),

        autoLoadEntities: true,
        synchronize:
          configService.get<string>('TYPEORM_SYNCHRONIZE') === 'true',

        ssl: {
          rejectUnauthorized: false,
        },

        logging: process.env.NODE_ENV === 'development', // Log SQL queries in dev
      }),
    }),
  ],
})
export class PersistanceModule {}
