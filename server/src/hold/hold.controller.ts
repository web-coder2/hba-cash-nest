import { Controller, Get, Query } from "@nestjs/common";

@Controller('hold')
export class HoldController {
    @Get()
    getHoldData(@Query('gte') gte: string, @Query('lte') lte: string) {
        return `hold data test from ${gte} to ${lte}`
    }
}