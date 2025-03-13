import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative pl-8", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

interface TimelineIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineIcon = React.forwardRef<HTMLDivElement, TimelineIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TimelineIcon.displayName = "TimelineIcon"

interface TimelineHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineHeader = React.forwardRef<HTMLDivElement, TimelineHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TimelineHeader.displayName = "TimelineHeader"

interface TimelineTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const TimelineTitle = React.forwardRef<HTMLHeadingElement, TimelineTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("font-semibold", className)}
        {...props}
      >
        {children}
      </h3>
    )
  }
)
TimelineTitle.displayName = "TimelineTitle"

interface TimelineDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const TimelineDescription = React.forwardRef<HTMLParagraphElement, TimelineDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)
TimelineDescription.displayName = "TimelineDescription"

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-2", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TimelineContent.displayName = "TimelineContent"

interface TimelineConnectorProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineConnector = React.forwardRef<HTMLDivElement, TimelineConnectorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-3 top-6 -bottom-4 w-px bg-border",
          className
        )}
        {...props}
      />
    )
  }
)
TimelineConnector.displayName = "TimelineConnector"

interface TimelineDotProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-[11px] top-2.5 h-2 w-2 rounded-full bg-primary",
          className
        )}
        {...props}
      />
    )
  }
)
TimelineDot.displayName = "TimelineDot"

export {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineContent,
  TimelineConnector,
  TimelineDot
}
