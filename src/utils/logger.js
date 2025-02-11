import winston from 'winston';

const red = '\x1b[31m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

const coloredFormat = winston.format.printf(({ level, message, timestamp }) => {
  let color = reset;
  if (level === "error") color = red;
  else if (level === "warn") color = yellow;
  else if (level === "info") color = green;

  return `${color}[${timestamp}] ${level}: ${message}${reset}`;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    coloredFormat
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  ],
});

export default logger;