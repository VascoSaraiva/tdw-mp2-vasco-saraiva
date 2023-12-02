"use client";

import ProviderRedux from "@/components/create/ProviderRedux";
import FormFirstSection from "@/components/create/FormFirstSection";
import FormSecondSection from "@/components/create/FormSecondSection";
import FormPublish from "@/components/create/FormPublish";

const Page = () => {

  return (
    <ProviderRedux>
      <div className='flex flex-col gap-6'>
        <FormFirstSection />
        <FormSecondSection />
        <FormPublish />
      </div>
    </ProviderRedux>
  );
};

export default Page;
