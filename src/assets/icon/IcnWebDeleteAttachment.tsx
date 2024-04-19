import * as React from "react"

function IcnWebDeleteAttachment(props: any) {
  return (
    <svg width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" {...props}>
      {/* <title>icn-web-delete-attachment</title> */}
      <g fillRule="nonzero" fill="none">
        <circle fill={props.backColor || "#999"} cx={12} cy={12} r={12} />
        <path
          fill={props.color || "#FFF"}
          d="M17 8.007L15.993 7 12 10.993 8.007 7 7 8.007 10.993 12 7 15.993 8.007 17 12 13.007 15.993 17 17 15.993 13.007 12z"
        />
      </g>
    </svg>
  )
}

export default IcnWebDeleteAttachment
