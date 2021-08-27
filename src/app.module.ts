import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PodcastModule } from './podcast/podcasts.module';


@Module({
  imports: [PodcastModule, GraphQLModule.forRoot({
    autoSchemaFile: true
  })],
  controllers: [],
  providers: []
})
export class AppModule {}
