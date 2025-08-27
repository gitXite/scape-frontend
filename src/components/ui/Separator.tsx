import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({
    className,
    orientation = 'vertical',
    decorative = true,
    ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
    return (
        <SeparatorPrimitive.Root
            data-slot='separator'
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "shrink-0",
                    orientation === "horizontal" ? "border-t border-border w-full" : "border-l border-border h-full",
                className
            )}
            {...props}
        />
    );
}

export { Separator };
