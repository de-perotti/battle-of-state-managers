import { Module } from '@nestjs/common';
import { ConfigurationModule } from './core/configuration/configuration.module';
import { ObservabilityModule } from './core/observability/observability.module';
import { HealthModule } from './core/health/health.module';
import { ObjectModule } from './features/object/object.module';

@Module({
  imports: [
    ConfigurationModule,
    ObservabilityModule,
    HealthModule,
    ObjectModule,
  ],
})
export class AppModule {}
