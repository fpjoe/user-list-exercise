module Types
  class CustomField < GraphQL::Schema::Field
    def initialize(*args, **kwargs, &block)
      kwargs.reverse_merge! camelize: true

      super(*args, **kwargs, &block)
    end
  end

  class BaseObject < GraphQL::Schema::Object
    field_class CustomField
  end
end
