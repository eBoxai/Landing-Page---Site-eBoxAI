"use client";

import { useId, useState } from "react";

type CommonProps = {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
};

type InputFieldProps = CommonProps & {
  as?: "input";
  type?: "text" | "email" | "tel";
};

type TextAreaFieldProps = CommonProps & {
  as: "textarea";
  rows?: number;
};

export default function FloatingField(props: InputFieldProps | TextAreaFieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const filled = props.value.length > 0;
  const floated = focused || filled;

  const wrapperCls = `relative rounded-xl border bg-white transition-colors ${
    focused ? "border-brand" : "border-border"
  }`;

  const labelCls = `pointer-events-none absolute left-4 transition-all duration-150 ${
    floated
      ? "top-1 text-[11px] text-mute-2"
      : props.as === "textarea"
      ? "top-4 text-base text-muted"
      : "top-1/2 -translate-y-1/2 text-base text-muted"
  }`;

  if (props.as === "textarea") {
    return (
      <div className={wrapperCls}>
        <label htmlFor={id} className={labelCls}>
          {props.label}
        </label>
        <textarea
          id={id}
          rows={props.rows ?? 4}
          required={props.required}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="block w-full resize-none rounded-xl bg-transparent px-4 pt-6 pb-3 text-base text-text outline-none"
        />
      </div>
    );
  }

  return (
    <div className={wrapperCls}>
      <label htmlFor={id} className={labelCls}>
        {props.label}
      </label>
      <input
        id={id}
        type={props.type ?? "text"}
        required={props.required}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block h-14 w-full rounded-xl bg-transparent px-4 pt-5 pb-1 text-base text-text outline-none"
      />
    </div>
  );
}
