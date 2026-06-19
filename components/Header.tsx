import Image from 'next/image';

const headerTitleClass =
  'm-0 font-condensed text-[4.125rem] font-bold uppercase leading-[0.8] tracking-[-0.12375rem] text-white';

const headerBrandClass =
  'font-condensed text-[2.09375rem] font-bold uppercase leading-[0.8] tracking-[-0.06281rem] text-white';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 mx-auto flex h-auto w-full max-w-content shrink-0 flex-col items-start gap-[0.75rem] bg-black p-5">
      <div className="flex w-full items-end justify-between self-stretch">
        <div>
          <p className={headerTitleClass}>BARBER</p>
          <p className={headerTitleClass}>NIGHT</p>
        </div>
        <p className={headerTitleClass}>S6</p>
      </div>

      <div className="flex w-full shrink-0 items-end justify-between self-stretch">
        <span className={headerBrandClass}>POWERED</span>
        <span className={headerBrandClass}>BY</span>
        <Image
          src="/fresha-logo.svg"
          alt="fresha"
          width={150}
          height={44}
          className="h-[2.739625rem] w-[9.3335rem]"
          priority
        />
      </div>
    </header>
  );
}
