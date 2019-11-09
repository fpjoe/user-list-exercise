module DatetimeUtils

  def self.datetime_for_date_str(date_str)
    # Arg: date string in MM/DD/YYYY format, e.g. '11/08/2019'
    # Returns: datetime object
    if is_valid_date_str?(date_str)
      DateTime.strptime(
        date_str.strip + " 00:00 #{DatetimeUtils.base_time_abbreviation(date_str.strip)}",
        '%m/%d/%Y %H:%M %Z'
      )
    end
  end

  def self.is_valid_date_str?(date_str)
    # Arg: date string
    # Valid if e.g. '10/16/2017', '3/17/2017', '11/2/2017', etc.
    date_str =~ /^\d?\d\/\d?\d\/\d\d\d\d$/
  end

  def self.base_time_abbreviation(month_day_year)
    # Arg: date string, e.g. '11/08/2019'
    # Returns: correct base time 3-letter abbreviation based on
    #          whether it's daylight savings or not in the given month_day_year
    #
    # e.g. if base time is Eastern Time, then returns one of:
    #   EST (Eastern Savings Time)
    #   EDT (Eastern Daylight Time)
    datetime = DatetimeUtils.date_utc_for_input_date(month_day_year)
    if DatetimeUtils.utc_offset(datetime) == DAYLIGHT_SAVING_TIME_UTC_OFFSET
      TIME_ZONE_ABBREVIATION_DAYLIGHT_SAVING_TIME
    else
      TIME_ZONE_ABBREVIATION_STANDARD_TIME
    end
  end

  def self.date_utc_for_input_date(date_str)
    # Arg: date string, e.g. '11/08/2019'
    DateTime.strptime(date_str + " 00:00 UTC", '%m/%d/%Y %H:%M %Z')
  end

  def self.utc_offset(datetime = nil)
    # Takes Daylight Savings Time into account, hence the logic below -
    # assumes we want offset between UTC and standard time or daylight
    # saving time - datetime arg gives us the date, so that we can
    # figure out if we're currently in standard time or
    # daylight saving time (standard for winter and daylight saving
    # for summer), so that we can figure out the offset
    #
    # MAPPING call below returns generic, non-Rails time zone name,
    # e.g. 'America/Los_Angeles'
    #
    # WARNING: It appears the final value getting returned from either
    # tz.current_period or period.utc_total_offset below is off by one
    # hour in early March around the switch from standard to daylight
    # saving - noticed this on Mar 9, 2017 even though the switch wasn't
    # until Mar 12, 2017 - Joe
    #
    tz = TZInfo::Timezone.get(ActiveSupport::TimeZone::MAPPING[TIME_ZONE_NAME])
    if datetime
      period = tz.period_for_utc(datetime)
    else
      period = tz.current_period
    end
    ( ( period.utc_total_offset / 3600 ) * -1 )
  end

end
