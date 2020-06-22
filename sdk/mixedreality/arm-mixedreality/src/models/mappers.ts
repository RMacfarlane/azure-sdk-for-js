/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const CheckNameAvailabilityRequest: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityRequest",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResponse: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResponse",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponse",
    modelProperties: {
      nameAvailable: {
        required: true,
        serializedName: "nameAvailable",
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        required: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        required: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        required: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpatialAnchorsAccount: msRest.CompositeMapper = {
  serializedName: "SpatialAnchorsAccount",
  type: {
    name: "Composite",
    className: "SpatialAnchorsAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
        type: {
          name: "String"
        }
      },
      accountDomain: {
        readOnly: true,
        serializedName: "properties.accountDomain",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountKeys: msRest.CompositeMapper = {
  serializedName: "AccountKeys",
  type: {
    name: "Composite",
    className: "AccountKeys",
    modelProperties: {
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountKeyRegenerateRequest: msRest.CompositeMapper = {
  serializedName: "AccountKeyRegenerateRequest",
  type: {
    name: "Composite",
    className: "AccountKeyRegenerateRequest",
    modelProperties: {
      serial: {
        serializedName: "serial",
        defaultValue: 1,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const RemoteRenderingAccountIdentity: msRest.CompositeMapper = {
  serializedName: "RemoteRenderingAccount_identity",
  type: {
    name: "Composite",
    className: "RemoteRenderingAccountIdentity",
    modelProperties: {
      ...Identity.type.modelProperties
    }
  }
};

export const RemoteRenderingAccount: msRest.CompositeMapper = {
  serializedName: "RemoteRenderingAccount",
  type: {
    name: "Composite",
    className: "RemoteRenderingAccount",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "RemoteRenderingAccountIdentity"
        }
      },
      accountId: {
        readOnly: true,
        serializedName: "properties.accountId",
        type: {
          name: "String"
        }
      },
      accountDomain: {
        readOnly: true,
        serializedName: "properties.accountDomain",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetIdentity: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_identity",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetIdentity",
    modelProperties: {
      ...Identity.type.modelProperties
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Free",
            "Basic",
            "Standard",
            "Premium"
          ]
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetSku: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_sku",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetSku",
    modelProperties: {
      ...Sku.type.modelProperties
    }
  }
};

export const Plan: msRest.CompositeMapper = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        required: true,
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        required: true,
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceModelWithAllowedPropertySetPlan: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet_plan",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySetPlan",
    modelProperties: {
      ...Plan.type.modelProperties
    }
  }
};

export const ResourceModelWithAllowedPropertySet: msRest.CompositeMapper = {
  serializedName: "ResourceModelWithAllowedPropertySet",
  type: {
    name: "Composite",
    className: "ResourceModelWithAllowedPropertySet",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      },
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetSku"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "ResourceModelWithAllowedPropertySetPlan"
        }
      }
    }
  }
};

export const OperationPage: msRest.CompositeMapper = {
  serializedName: "OperationPage",
  type: {
    name: "Composite",
    className: "OperationPage",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SpatialAnchorsAccountPage: msRest.CompositeMapper = {
  serializedName: "SpatialAnchorsAccountPage",
  type: {
    name: "Composite",
    className: "SpatialAnchorsAccountPage",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SpatialAnchorsAccount"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteRenderingAccountPage: msRest.CompositeMapper = {
  serializedName: "RemoteRenderingAccountPage",
  type: {
    name: "Composite",
    className: "RemoteRenderingAccountPage",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RemoteRenderingAccount"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
