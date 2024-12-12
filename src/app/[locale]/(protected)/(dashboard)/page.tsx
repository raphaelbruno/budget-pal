import BackendFacade from "@/backend";
import { Button } from "@/components/ui/button";
import { Account } from "@/core/models/Account";
import {
  ArrowLeftRightIcon,
  HandCoinsIcon,
  LayoutDashboardIcon,
  ReceiptIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import PageTitle from "../_components/page-title";
import WidgetTransaction from "../_components/widget-transaction";
import TransactionDialogForm from "../transactions/dialog-form";
import { TransactionType } from "@/core/models/Transaction";

export default async function Panel() {
  const t = await getTranslations();
  const accounts: Account[] = [
    { id: 1, title: "Conta Poupanća" } as Account,
    { id: 2, title: "Conta Corrente" } as Account,
  ];
  const amountAccounts = await BackendFacade.accounts.total();
  const amountCategories = await BackendFacade.categories.total();

  return (
    <div className="flex flex-col flex-grow w-full gap-3 px-3 py-2">
      <PageTitle title={t("menu.dashboard")} icon={<LayoutDashboardIcon />} />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="col-span-full">
          <WidgetTransaction title="reports.monthly">
            <TransactionDialogForm
              variant={TransactionType.Pay}
              accounts={accounts}
            >
              <Button variant={"destructive"} size={"xs"}>
                <ReceiptIcon />
                {t("transactions.pay")}
              </Button>
            </TransactionDialogForm>

            <TransactionDialogForm
              variant={TransactionType.Receive}
              accounts={accounts}
            >
              <Button variant={"success"} size={"xs"}>
                <HandCoinsIcon />
                {t("transactions.receive")}
              </Button>
            </TransactionDialogForm>

            <TransactionDialogForm accounts={accounts}>
              <Button variant={"outline"} size={"xs"}>
                <ArrowLeftRightIcon />
                {t("transactions.transfer")}
              </Button>
            </TransactionDialogForm>
          </WidgetTransaction>
        </div>

        {/* <GenericWidget
          title="menu.accounts"
          icon={<WalletIcon size={"auto"} />}
          value={amountAccounts.toLocaleString()}
        />
        <GenericWidget
          title="menu.categories"
          icon={<TagIcon size={"auto"} />}
          value={amountCategories.toLocaleString()}
        /> */}
      </div>
    </div>
  );
}
