import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PodcastModule } from './podcast/podcasts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".test.env",
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV : Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
      })
    }),
    TypeOrmModule.forRoot({
      "type": 'postgres',
      "host": process.env.DB_HOST,
      "port": +process.env.DB_PORT,
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "synchronize": true,
      "logging": true,
    }),
    GraphQLModule.forRoot({
  autoSchemaFile: true
  }),
  PodcastModule, 
],
  controllers: [],
  providers: []
})
export class AppModule {}
