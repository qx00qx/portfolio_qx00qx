import Hero from '@/widgets/Hero/Hero'
import StepWorks from '@/widgets/StepWorks/StepWorks'
import TransitionToLead from '@/widgets/TransitionToLeadForm/TransitionToLead'
import WhatCanIHelpYou from '@/widgets/WhatCanIHelpYou/WhatCanIHelpYou'
import WorkingConditions from '@/widgets/WorkingConditions/WorkingConditions'
import Layout from './layouts/Layout'
import PreviewCases from '@/widgets/CasesPreview/CasesPreview'
import Footer from '@/widgets/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <Layout>
                <WhatCanIHelpYou />
                <PreviewCases />
                <WorkingConditions />
                <StepWorks />
            </Layout>
            <TransitionToLead />
        </>
    )
}
