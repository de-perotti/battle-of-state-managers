import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import { ObservabilityModule } from './core/observability/observability.module';
import { FeaturesModule } from './features/features.module';
import { ConfigurationModule } from './core/configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    ConfigModule.forFeature(appConfig),
    ObservabilityModule,
    FeaturesModule,
  ],
})
export class AppModule {}
