import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import { ObservabilityModule } from './core/observability/observability.module';
import { FeaturesModule } from './features/features.module';
import { ConfigurationModule } from './core/configuration/configuration.module';
import { HealthModule } from './core/health/health.module';

@Module({
  imports: [
    ConfigurationModule,
    ConfigModule.forFeature(appConfig),
    ObservabilityModule,
    FeaturesModule,
    HealthModule,
  ],
})
export class AppModule {}
