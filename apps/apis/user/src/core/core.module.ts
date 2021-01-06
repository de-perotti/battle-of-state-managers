import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ObservabilityModule } from './observability/observability.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    AuthenticationModule,
    DatabaseModule,
    HealthModule,
    ObservabilityModule,
    ConfigurationModule,
    MetricsModule,
  ],
})
export class CoreModule {}
