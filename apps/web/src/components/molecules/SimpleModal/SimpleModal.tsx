import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export interface SimpleModalProps {
  dialogTrigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export function SimpleModal({ dialogTrigger, children, title }: SimpleModalProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter />
      </DialogContent>
    </DialogRoot>
  );
}
