import { Module } from "@nestjs/common";
import { HoldController } from "./hold.controller";

@Module({
    controllers: [HoldController]
})

export class HoldModule {}