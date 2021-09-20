import { JwtStrategy } from '@/auth/jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  exports: [PassportModule, JwtStrategy],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [JwtStrategy],
})
export class AuthModule {}
