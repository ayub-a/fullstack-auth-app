import { CookieOptions, Response } from "express"

import { TimeUtils } from "../utils/date"
import { NODE_ENV } from "../constants/env"


interface IParams {
    res: Response
    accessToken: string
    refreshToken: string
}


export class CookieService {

    static readonly REFRESH_PATH = '/auth/refresh'
    static readonly ACCESS_TOKEN = 'accessToken'
    static readonly REFRESH_TOKEN = 'refreshToken'

    private static get isProduction() {
        return NODE_ENV === 'production'
    }

    private static readonly defaults: CookieOptions = {
        sameSite: CookieService.isProduction ? 'strict' : 'lax',
        httpOnly: true,
        secure: CookieService.isProduction
    }

    static get accessTokenCookieOptions(): CookieOptions {
        return {
            ...CookieService.defaults,
            expires: TimeUtils.fifteenMinutesFromNow
        }
    }

    static get refreshTokenCookieOptions(): CookieOptions {
        return {
            ...CookieService.defaults,
            expires: TimeUtils.thirtyDaysFromNow,
            path: CookieService.REFRESH_PATH
        }
    } 


    setAuthCookies({ res, accessToken, refreshToken }: IParams) {
        return res
        .cookie(CookieService.ACCESS_TOKEN, accessToken, CookieService.accessTokenCookieOptions)
        .cookie(CookieService.REFRESH_TOKEN, refreshToken, CookieService.refreshTokenCookieOptions)
    }


    clearAuthCookies(res: Response) {
        return res
        .clearCookie(CookieService.ACCESS_TOKEN)
        .clearCookie(CookieService.REFRESH_TOKEN, {
            path: CookieService.REFRESH_PATH
        })
    }

}


export const cookieService = new CookieService()
