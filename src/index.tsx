import { NativeModules } from 'react-native';

type AlarmType = {
  offset: Number;
  date: String;
};

type ReminderType = {
  id: String;
  title: String;
  note: String;
  alarms: Array<AlarmType>;
};

type ReminderConfig = {
  title: String;
  note: String;
  timestamp: Number;
};

type RemindersType = {
  requestPermission(): Promise<boolean>;
  getReminders(): Promise<Array<ReminderType>>;
  addReminder(config: ReminderConfig): Promise<ReminderType>;
};

const { Reminders } = NativeModules;

export default Reminders as RemindersType;
