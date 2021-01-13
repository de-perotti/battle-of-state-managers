import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ObservabilityModule } from './observability/observability.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { MetricsModule } from './metrics/metrics.module';
import { EncryptionModule } from './encryption/encryption.module';

@Module({
  imports: [
    DatabaseModule,
    HealthModule,
    ObservabilityModule,
    ConfigurationModule,
    MetricsModule,
    EncryptionModule,
  ],
})
export class CoreModule {}
