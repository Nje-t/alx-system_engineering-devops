import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { VolunteerModule } from "./volunteer/volunteer.module";
import { StoryModule } from "./story/story.module";
import { CategoryModule } from "./category/category.module";
import { ForumPostModule } from "./forumPost/forumPost.module";
import { CommentModule } from "./comment/comment.module";
import { VolunteerOpportunityModule } from "./volunteerOpportunity/volunteerOpportunity.module";
import { EventModule } from "./event/event.module";
import { FundraiserModule } from "./fundraiser/fundraiser.module";
import { DonationModule } from "./donation/donation.module";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    VolunteerModule,
    StoryModule,
    CategoryModule,
    ForumPostModule,
    CommentModule,
    VolunteerOpportunityModule,
    EventModule,
    FundraiserModule,
    DonationModule,
    UserModule,
    RoleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
