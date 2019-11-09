class ClientPropUtilsService

  def default_graphql_result(result_fields)
    # Returns, e.g.:
    # {
    #   foo:    nil,
    #   bar:    nil,
    #   errors: []
    # }

    default_result =
      Hash[result_fields.zip(Array.new(result_fields.length,nil))]

    default_result.merge({
      errors: []
    })
  end

  def pagination_info(raw_objects,
                      page,
                      num_per_page)
    page ||= 1

    num_total = raw_objects.count

    raw_objects =
      raw_objects.paginate(
        page:     page,
        per_page: num_per_page
      )

    (num_start,num_end,num_total) =
      DisplayUtils.get_pagination_num_start_end(
        num_total,
        num_per_page,
        page
      )

    pages =
      DisplayUtils.get_pagination_page_list(
        num_total,
        num_per_page
      )

    [raw_objects,
     num_start,
     num_end,
     num_total,
     pages]
  end

end
