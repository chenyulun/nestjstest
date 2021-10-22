import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}
  use(req: any, res: any, next: () => void) {
    const query: any = req.query || {};
    const uaString =
      query.ua || (req.headers && req.headers['user-agent']) || '';
    this.logger.log(
      JSON.stringify({
        url: req.originalUrl,
        ip: req.ip,
        method: req.method,
        ua: uaString,
      }),
      'HttpRequest',
    );
    next();
  }
}
