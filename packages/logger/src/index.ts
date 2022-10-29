type TerminalColor = { [key: string]: string };
type Level = { tag: string; font_color: string; bg_color: string };
type Levels = { [key: string]: Level };

const terminalOps: TerminalColor = {
  reset: "\x1b[0m"
};

const fontColors: TerminalColor = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  none: ""
};

const bgColors: TerminalColor = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
  none: ""
};

const levels: Levels = {
  info: {
    tag: "[INFO]",
    font_color: "",
    bg_color: ""
  },
  warn: {
    tag: "[WARN]",
    font_color: fontColors.yellow,
    bg_color: ""
  },
  debug: {
    tag: "[DEBUG]",
    font_color: fontColors.cyan,
    bg_color: ""
  },
  error: {
    tag: "[ERROR]",
    font_color: fontColors.red,
    bg_color: ""
  },
  fatal: {
    tag: "[FATAL]",
    font_color: fontColors.white,
    bg_color: bgColors.red
  },
  ok: {
    tag: "[OK]",
    font_color: fontColors.green,
    bg_color: ""
  }
};

const logLevels = Object.keys(levels);

const logMessage = (level: string, message: string) => {
  const now = new Date();

  let levelData: Level = {
    tag: "[LOG]",
    font_color: "",
    bg_color: ""
  };

  if (logLevels.includes(level)) {
    levelData = {
      ...levels[level]
    };
  }

  const day = now.getDate().toString().length < 2 ? "0".concat(now.getDate().toString()) : now.getDate();
  const month = now.getMonth().toString().length < 2 ? "0".concat((now.getMonth() + 1).toString()) : now.getMonth() + 1;
  const year = now.getFullYear();

  const hour = now.getHours().toString().length < 2 ? "0".concat(now.getHours().toString()) : now.getHours();
  const minutes = now.getMinutes().toString().length < 2 ? "0".concat(now.getMinutes().toString()) : now.getMinutes();
  const seconds = now.getSeconds().toString().length < 2 ? "0".concat(now.getSeconds().toString()) : now.getSeconds();

  const timestamp = `${day}/${month}/${year} -- ${hour}:${minutes}:${seconds}`;
  console.log(`${levelData.font_color}${levelData.bg_color}${levelData.tag}\t[${timestamp}]\t${message}${terminalOps.reset}`);
};

const logger = {
  log: (message: string) => logMessage("log", message),
  info: (message: string) => logMessage("info", message),
  warn: (message: string) => logMessage("warn", message),
  debug: (message: string) => logMessage("debug", message),
  fatal: (message: string) => logMessage("fatal", message),
  error: (message: string) => logMessage("error", message),
  ok: (message: string) => logMessage("ok", message)
};

export default logger;