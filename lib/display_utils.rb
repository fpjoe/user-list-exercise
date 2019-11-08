module DisplayUtils

  # e.g. Apr 07, 2015
  def self.date_display(datetime)
    datetime.in_time_zone(TIME_ZONE_NAME).strftime("%b %d, %Y")
  end

  def self.get_pagination_num_start_end(num_total,per_page,page)
    page = page.to_i
    if !page || page < 1
      page = 1
    end

    num_start = ( (page.to_i-1) * per_page ) + 1
    num_end = num_start + per_page - 1
    if num_end > num_total
      num_end = num_total
    end

    [num_start,num_end,num_total]
  end

  def self.get_pagination_page_list(num_total,per_page)
    num_pages = ( num_total.to_f / per_page.to_f ).ceil

    (1..num_pages).to_a
  end

end
